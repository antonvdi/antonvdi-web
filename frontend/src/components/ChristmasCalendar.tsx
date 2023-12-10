import React from "react";
import Door from "./Door";
import Advent1 from "./advents/Advent1";
import Advent2 from "./advents/Advent2";
import Advent0 from "./advents/Advent0";
import Advent3 from "./advents/Advent3";
import Advent4 from "./advents/Advent4";
import Advent5 from "./advents/Advent5";
import Advent6 from "./advents/Advent6";
import Advent7 from "./advents/Advent7";
import Advent8 from "./advents/Advent8";
import Advent9 from "./advents/Advent9";
import Advent10 from "./advents/Advent10";
import Advent24 from "./advents/Advent24";
import Advent11 from "./advents/Advent11";
import Advent12 from "./advents/Advent12";
import Advent13 from "./advents/Advent13";
import Advent14 from "./advents/Advent14";
import Advent15 from "./advents/Advent15";

const calendar = [
  <Advent0 />,
  <Advent1 />,
  <Advent2 />,
  <Advent3 />,
  <Advent4 />,
  <Advent5 />,
  <Advent6 />,
  <Advent7 />,
  <Advent8 />,
  <Advent9 />,
  <Advent10 />,
  <Advent11 />,
  <Advent12 />,
  <Advent13 />,
  <Advent14 />,
  <Advent15 />,
  <></>,
  <></>,
  <></>,
  <></>,
  <></>,
  <></>,
  <></>,
  <Advent24 />,
];

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
