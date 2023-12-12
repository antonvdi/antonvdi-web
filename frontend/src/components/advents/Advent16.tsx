import React, { useContext } from "react";
import { ChristmasContext } from "../../pages/MariaPage";

const Advent16: React.FC = () => {
  const { context, setContext } = useContext(ChristmasContext);

  const switchSnow = () => {
    setContext({ ...context, hasChristmasLights: !context.hasChristmasLights });
  };

  return (
    <>
      <button
        onClick={switchSnow}
        className="bg-green-600 hover:bg-green-800 hover:scale-105 text-white py-2 px-4 rounded transform active:scale-95 transition-transform"
      >
        Julelys til juletræet!
      </button>
    </>
  );
};

export default Advent16;
