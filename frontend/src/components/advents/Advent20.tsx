import React from "react";
import DialogButton from "../DialogButton";

const Advent20: React.FC = () => {
  return (
    <>
      <DialogButton
        title=""
        buttonText="Hvorfor bliver pingvinen Bent aldrig gift?"
        buttonColor="bg-fuchsia-600"
        buttonColorHover="hover:bg-fuchsia-800"
        body={
          <>
            {
              "Hver gang han er forlovet får hans pingvin forlovede kolde fødder :("
            }
          </>
        }
      />
    </>
  );
};

export default Advent20;
