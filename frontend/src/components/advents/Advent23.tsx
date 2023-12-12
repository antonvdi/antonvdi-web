import React from "react";
import DialogButton from "../DialogButton";
import BentGame from "../maze/BentGame";

const Advent23: React.FC = () => {
  return (
    <>
      <DialogButton
        title=""
        buttonText="DET JUL!"
        buttonColor="bg-red-600"
        buttonColorHover="hover:bg-red-800"
        body={<BentGame />}
      />
    </>
  );
};

export default Advent23;
