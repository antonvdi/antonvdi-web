import React from "react";
import DialogButton from "../DialogButton";

const Advent14: React.FC = () => {
  return (
    <>
      <DialogButton
        title="see???"
        buttonText="Kvinder har ikke Adams æbler"
        buttonColor="bg-red-600"
        buttonColorHover="hover:bg-red-800"
        body={
          <div className="max-width-sm">
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/HQreavgPdMM?si=_IZBfa2S-XeJpmyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
              }}
            ></div>
          </div>
        }
      />
    </>
  );
};

export default Advent14;
