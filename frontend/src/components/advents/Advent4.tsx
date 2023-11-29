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
        className="bg-green-600 hover:bg-green-800 hover:scale-105 text-white py-2 px-4 rounded transform active:scale-95 transition-transform"
      >
        Få et juletræ!
      </button>
    </>
  );
};

export default Advent4;
