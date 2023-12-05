import React, { createContext, useState } from "react";
import ChristmasCalendar from "../components/ChristmasCalendar";
import { ReactComponent as ChristmasTreeSVG } from "../resources/christmastree.svg";
import Snowfall from "react-snowfall";

interface IChristmasContext {
  showTree: boolean;
  isSnowing: boolean;
}

const initContext: IChristmasContext = {
  showTree: new Date().getDate() > 5 && new Date().getDate() !== 24,
  isSnowing: new Date().getDate() > 4,
};

export const ChristmasContext = createContext({
  context: initContext,
  setContext: (context: IChristmasContext) => {},
});

const MariaPage: React.FC = () => {
  const [context, setContext] = useState(initContext);

  return (
    <ChristmasContext.Provider value={{ context, setContext }}>
      <div className="min-h-screen bg-gradient-to-br from-teal-200 to-blue-200 flex flex-col justify-center items-center">
        {context.showTree ? (
          <ChristmasTreeSVG width={100} height={100} />
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
