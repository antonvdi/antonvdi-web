import React from "react";
import DialogButton from "../DialogButton";
import Image from "../../resources/frank_christmas_sus.webp";

const Advent22: React.FC = () => {
  return (
    <>
      <DialogButton
        title=""
        buttonText="Der sker da noget underligt her..."
        buttonColor="bg-red-600"
        buttonColorHover="hover:bg-red-800"
        body={
          <div className="max-width-sm">
            <img
              src={Image}
              alt="Description"
              className="rounded-lg shadow-lg w-96"
            />
            <p>Håber alting er klar til jul i morgen!</p>
          </div>
        }
      />
    </>
  );
};

export default Advent22;
