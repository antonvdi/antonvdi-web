import React from "react";
import DialogButton from "../DialogButton";
import Image from "../../resources/Frank_Cars.webp";

const Advent9: React.FC = () => {
  return (
    <>
      <DialogButton
        title=""
        buttonText="her gemmer du dig"
        buttonColor="bg-indigo-600"
        buttonColorHover="hover:bg-indigo-800"
        body={
          <div className="max-width-sm">
            <img
              src={Image}
              alt="Description"
              className="rounded-lg shadow-lg w-96"
            />
            <p>fun fact, han hedder Frank</p>
          </div>
        }
      />
    </>
  );
};

export default Advent9;
