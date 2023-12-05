import React from "react";
import DialogButton from "../DialogButton";

const Advent7: React.FC = () => {
  return (
    <>
      <DialogButton
        title="Phoebe's julesang!!!"
        buttonText="En endnu bedre sang :))"
        buttonColor="bg-red-600"
        buttonColorHover="hover:bg-red-800"
        body={
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8oGesoOOIyU?si=zUSGBcjFYfKwMfC3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            }}
          ></div>
        }
      />
    </>
  );
};

export default Advent7;
