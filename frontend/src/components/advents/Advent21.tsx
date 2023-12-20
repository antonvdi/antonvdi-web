import React from "react";
import DialogButton from "../DialogButton";
import Image from "../../resources/frank_christmas.webp";

const Advent21: React.FC = () => {
  return (
    <>
      <DialogButton
        title=""
        buttonText="En jule-Frank"
        buttonColor="bg-indigo-600"
        buttonColorHover="hover:bg-indigo-800"
        body={
          <div className="max-width-sm">
            <img
              src={Image}
              alt="Description"
              className="rounded-lg shadow-lg w-96"
            />
            <p>Gad vide hvad han er ude på...</p>
          </div>
        }
      />
    </>
  );
};

export default Advent21;
