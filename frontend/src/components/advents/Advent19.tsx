import React, { useContext } from "react";
import { ChristmasContext } from "../../pages/MariaPage";

const Advent19: React.FC = () => {
  const { context, setContext } = useContext(ChristmasContext);

  const switchStar = () => {
    setContext({ ...context, hasStar: !context.hasStar });
  };

  return (
    <>
      <button
        onClick={switchStar}
        className="bg-yellow-600 hover:bg-yellow-800 hover:scale-105 text-white py-2 px-4 rounded transform active:scale-95 transition-transform"
      >
        Tid til en julestjerne
      </button>
    </>
  );
};

export default Advent19;
