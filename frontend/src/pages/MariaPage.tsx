import React, { createContext, useState } from "react";
import ChristmasCalendar from "../components/ChristmasCalendar";
import { ReactComponent as ChristmasTreeSVG } from "../resources/christmastree.svg";
import Snowfall from "react-snowfall";
import "./MariaPage.css";

interface IChristmasContext {
  showTree: boolean;
  isSnowing: boolean;
  hasChristmasLights: boolean;
  christmasColor: { color: number; label: string } | null;
  hasStar: boolean;
}

const initContext: IChristmasContext = {
  showTree: new Date().getDate() > 5 && new Date().getDate() !== 24,
  isSnowing: new Date().getDate() > 4,
  hasChristmasLights: new Date().getDate() > 16,
  christmasColor: null,
  hasStar: new Date().getDate() > 20,
};

export const ChristmasContext = createContext({
  context: initContext,
  setContext: (context: IChristmasContext) => {},
});

const MariaPage: React.FC = () => {
  const [context, setContext] = useState(initContext);
  const christmasColors = [
    "bg-red-500", // Classic Christmas Red
    "bg-green-500", // Christmas Tree Green
    "bg-yellow-500", // Bright Yellow for a festive look
    "bg-blue-500", // Blue, often used in Christmas lights
    "bg-purple-500", // A rich, vibrant purple
    "bg-pink-500", // Soft, festive pink
    "bg-orange-500", // Warm, inviting orange
    "bg-white", // Pure, snowy white
    "bg-gray-300", // Light gray for a subtle touch
    "bg-indigo-500", // Deep indigo for a unique look
  ];
  const lights = [
    {
      top: "40%",
      left: "35%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
    {
      top: "40%",
      left: "55%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
    {
      top: "55%",
      left: "30%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
    {
      top: "60%",
      left: "45%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
    {
      top: "55%",
      left: "60%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
    {
      top: "75%",
      left: "20%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
    {
      top: "75%",
      left: "33%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
    {
      top: "75%",
      left: "55%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
    {
      top: "75%",
      left: "70%",
      color:
        christmasColors[Math.floor(Math.random() * christmasColors.length)],
    },
  ];

  return (
    <ChristmasContext.Provider value={{ context, setContext }}>
      <div className="min-h-screen bg-gradient-to-br from-teal-200 to-blue-200 flex flex-col justify-center items-center">
        {context.showTree ? (
          context.hasChristmasLights ? (
            <div className="relative w-[100px] h-[100px]">
              <ChristmasTreeSVG width={100} height={100} />
              {lights.map((light) => (
                <div
                  key={light.top + light.left + light.color}
                  className={`absolute w-2 h-2 rounded-full ${
                    context.christmasColor
                      ? christmasColors[context.christmasColor.color]
                      : light.color
                  } blur-[1px]`}
                  style={{ top: light.top, left: light.left }}
                />
              ))}
              {context.hasStar ? (
                <div
                  key={"star"}
                  className={`star`}
                  style={{ top: "10%", left: "38%" }}
                />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <ChristmasTreeSVG width={100} height={100} />
          )
        ) : (
          <></>
        )}
        {context.isSnowing ? (
          <Snowfall
            snowflakeCount={300}
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
            }}
          />
        ) : (
          <></>
        )}
        <h1 className="text-5xl font-bold text-sky-500">
          Maria's julekalender :)
        </h1>
        <ChristmasCalendar />
      </div>
    </ChristmasContext.Provider>
  );
};

export default MariaPage;
