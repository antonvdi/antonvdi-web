import React, { useContext } from "react";
import { ChristmasContext } from "../../pages/MariaPage";

const Advent3: React.FC = () => {
  const { context, setContext } = useContext(ChristmasContext);

  const switchSnow = () => {
    setContext({ ...context, isSnowing: !context.isSnowing });
  };

  return (
    <>
      <button
        onClick={switchSnow}
        className="bg-white hover:bg-gray-200 hover:scale-105 text-black py-2 px-4 rounded transform active:scale-95 transition-transform"
      >
        Make it snow🤍
      </button>
    </>
  );
};

export default Advent3;
