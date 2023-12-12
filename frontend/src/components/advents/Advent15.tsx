import React, { useState } from "react";
import DialogButton from "../DialogButton";
import Image from "../../resources/chicken_soup.webp";

const Advent15: React.FC = () => {
  const [correct, setCorrect] = useState(false);

  return (
    <>
      <DialogButton
        title="Gæt ordsproget :)"
        buttonText="En lille leg"
        buttonColor="bg-fuchsia-600"
        buttonColorHover="hover:bg-fuchsia-800"
        body={
          <div className="max-w-sm">
            <img
              src={Image}
              alt="Description"
              className="rounded-lg shadow-lg max-w-sm"
            />
            <input
              onChange={(event) =>
                setCorrect(
                  event.target.value.toLowerCase().includes("høns i suppen")
                )
              }
              className="rounded-lg mt-3 p-1"
              placeholder="Skriv her"
            ></input>
            {correct ? (
              <p className="text-green-800 font-bold">Du gættede rigtigt!</p>
            ) : (
              <></>
            )}
          </div>
        }
      />
    </>
  );
};

export default Advent15;
