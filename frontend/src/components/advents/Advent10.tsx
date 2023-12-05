import React from "react";
import DialogButton from "../DialogButton";

const Advent10: React.FC = () => {
  return (
    <>
      <DialogButton
        title=""
        buttonText="Sæt lyd på"
        buttonColor="bg-red-600"
        buttonColorHover="hover:bg-red-800"
        body={
          <div className="max-width-sm">
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe width="110" height="200" src="https://www.myinstants.com/instant/tu-tu-tu-du-max-verstappen-18834/embed/" frameborder="0" scrolling="no"></iframe>`,
              }}
            ></div>
          </div>
        }
      />
    </>
  );
};

export default Advent10;
