import React, { useContext } from "react";
import { ChristmasContext } from "../../pages/MariaPage";

const Advent4: React.FC = () => {
  const { context, setContext } = useContext(ChristmasContext);

  const addTree = () => {
    setContext({ ...context, showTree: true });
  };

  return (
    <>
      <button
        onClick={addTree}
        className="bg-white hover:bg-gray-200 hover:scale-105 text-black py-2 px-4 rounded transform active:scale-95 transition-transform"
      >
        Få et juletræ!
      </button>
    </>
  );
};

export default Advent4;
