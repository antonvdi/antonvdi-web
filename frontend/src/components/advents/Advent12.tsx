import React, { useState } from "react";
import { ReactComponent as PenguinSVG } from "../../resources/penguin.svg";
import { ReactComponent as Vanilje0 } from "../../resources/vaniljekrans0.svg";
import { ReactComponent as Vanilje1 } from "../../resources/vaniljekrans1.svg";
import { ReactComponent as Vanilje2 } from "../../resources/vaniljekrans2.svg";
import { ReactComponent as Vanilje3 } from "../../resources/vaniljekrans3.svg";
import { ReactComponent as Vanilje4 } from "../../resources/vaniljekrans4.svg";

const Advent12: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <PenguinSVG width="80px" height="50px" />
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        {counter === 0 ? (
          <Vanilje0 width="50px" height="50px" />
        ) : counter === 1 ? (
          <Vanilje1 width="50px" height="50px" />
        ) : counter === 2 ? (
          <Vanilje2 width="50px" height="50px" />
        ) : counter === 3 ? (
          <Vanilje3 width="50px" height="50px" />
        ) : counter === 4 ? (
          <Vanilje4 width="50px" height="50px" />
        ) : (
          <small>nu er bent mæt, tak</small>
        )}
      </button>
    </>
  );
};

export default Advent12;
