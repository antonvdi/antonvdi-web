import React, { useState } from "react";
import DialogButton from "../DialogButton";

const Advent18: React.FC = () => {
  const [correct, setCorrect] = useState(false);

  return (
    <>
      <DialogButton
        title="jeg har forklaret julefilmens plot i emojis, gæt hvilken det er :D"
        buttonText="Gæt julefilmen"
        buttonColor="bg-fuchsia-600"
        buttonColorHover="hover:bg-fuchsia-800"
        body={
          <div className="max-w-sm">
            🏠👦🎄🍕🚪🔒😲🦹‍♂️🦹‍♂️🕵️‍♂️💥🧨🔨⏰🚓🎉👨‍👩‍👦
            <input
              onChange={(event) =>
                setCorrect(
                  event.target.value.toLowerCase().includes("alene hjemme")
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

export default Advent18;
