import React from 'react';
import { ReactComponent as SunflowerSVG } from '../resources/sunflower.svg'; // Path to your SVG file
import Door from '../components/Door';

const calendar = [
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
    <SunflowerSVG width="100px" height="75px"/>,
]

const ChristmasCalendar: React.FC = () => {
  // Seed for the random number generator
  const seed = 12345;
  let randomSeed = seed;

  // Seeded random function
  const seededRandom = () => {
    const x = Math.sin(randomSeed++) * 10000;
    return x - Math.floor(x);
  };

  // Function to generate a random margin value within a range using the seeded random function
  const randomMargin = () => {
    const min = 5;
    const max = 19;
    return Math.floor(seededRandom() * (max - min + 1)) + min;
  };

  return (
    <div className="flex flex-wrap">
        {calendar.map((item, index) => {
            // Generate random margins for each item using the seeded random function
            const margin = randomMargin();
            return (
              <div style={{ margin: `${margin * 4}px` }}>
                <Door titel={String(index + 1)}>{item}</Door>
              </div>
            );
        })}
    </div>
  );
};


export default ChristmasCalendar;
