import React from "react";
import Door from "./Door";
import Advent1 from "./advents/Advent1";
import Advent2 from "./advents/Advent2";
import Advent0 from "./advents/Advent0";

const calendar = [<Advent0 />, <Advent1 />, <Advent2 />];

const ChristmasCalendar: React.FC = () => {
  const seed = 12345;
  let randomSeed = seed;

  const seededRandom = () => {
    const x = Math.sin(randomSeed++) * 10000;
    return x - Math.floor(x);
  };

  function randomChoice(arr: string[]) {
    return arr[Math.floor(arr.length * seededRandom())];
  }

  // Function to generate a random margin value within a range using the seeded random function
  const randomMargin = () => {
    const choices = [
      "m-1",
      "m-2",
      "m-3",
      "m-4",
      "m-5",
      "m-6",
      "m-7",
      "m-8",
      "m-9",
      "m-10",
      "m-11",
    ];
    return randomChoice(choices);
  };

  return (
    <div className="flex flex-wrap">
      {calendar.map((item, index) => {
        // Generate random margins for each item using the seeded random function
        const margin = randomMargin();
        return (
          <div className={margin}>
            <Door title={String(index + 1)}>{item}</Door>
          </div>
        );
      })}
    </div>
  );
};

export default ChristmasCalendar;
