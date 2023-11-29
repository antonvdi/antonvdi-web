import React from "react";
import DialogButton from "../DialogButton";
import Image from "../../resources/collage.png";

const Advent6: React.FC = () => {
  return (
    <>
      <DialogButton
        title="dejlige billeder<3"
        buttonText="Hvad får du mon i dag..."
        buttonColor="bg-fuchsia-600"
        buttonColorHover="hover:bg-fuchsia-800"
        body={
          <div className="max-width-sm">
            <img
              src={Image}
              alt="Description"
              className="rounded-lg shadow-lg w-96"
            />
          </div>
        }
      />
    </>
  );
};

export default Advent6;
