/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import OpenAI from "openai";

admin.initializeApp();

let cache: { lastResponse: null | string; lastTimestamp: number } = {
  lastResponse: null,
  lastTimestamp: 0,
};

const CACHE_DURATION = 5000; // Cache duration in milliseconds (5 seconds)

export const askOpenAI = onRequest(
  { cors: true },
  async (request, response) => {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    const prevAnswers = request.body.data.prevAnswers;
    const businessType = request.body.data.businessType;

    const currentTime = Date.now();
    if (
      cache.lastResponse &&
      cache.lastTimestamp &&
      currentTime - cache.lastTimestamp < CACHE_DURATION
    ) {
      response.send({
        status: 200,
        data: cache.lastResponse,
      });
      return;
    }

    let prevAnswersPrompt = prevAnswers;
    if (prevAnswersPrompt.length > 200) {
      prevAnswersPrompt = prevAnswers.slice(
        prevAnswers.length - 200,
        prevAnswers.length
      );
    }

    const predefinedPrompt = `Hvilken konkrete software løsning, der bruger AI eller ML, kan jeg udvikle, der kan skabe værdi for min virksomhed? Min virksomhed er en ${businessType}. Undgå de allerede brugte svar: ${prevAnswersPrompt}.`;

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Du er en hjælpsom assistent. Du svarer med 1-7 ord og på en måde, der giver mening til non-tech folk. Sætningen skal kunne slutte 'AI kan hjælpe dig med...', men ikke inkludere den specifikke sætning.",
          },
          {
            role: "user",
            content: predefinedPrompt,
          },
        ],
        model: "gpt-4o",
      });

      const answer = completion.choices[0].message.content;

      // Update cache
      cache.lastResponse = answer;
      cache.lastTimestamp = currentTime;

      response.send({
        status: 200,
        data: answer,
      });
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      response.send({
        status: 500,
        error: "Failed to fetch response from OpenAI.",
      });
    }
  }
);
