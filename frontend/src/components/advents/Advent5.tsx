import React from "react";
import DialogButton from "../DialogButton";

const Advent5: React.FC = () => {
  return (
    <>
      <DialogButton
        title="En liste med (dårlige) kælenavne du kan prøve af :)"
        buttonText="Gad vide hvad der er her..."
        body={
          <div>
            <ol className="list-decimal ml-4">
              <li>Skat (ofc)</li>
              <li>Nissefar...</li>
              <li>Bøllemis???</li>
              <li>Marriva (den er god)</li>
              <li>Bassemand (nej tak)</li>
              <li>
                "Hvem-er-du-og-hvordan-er-du-kommet-ind-i-mit-soveværelse"
              </li>
              <li>Mejetærskeren (også ret god faktisk)</li>
            </ol>
          </div>
        }
      />
    </>
  );
};

export default Advent5;
