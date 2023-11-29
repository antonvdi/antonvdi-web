import React from "react";
import { ReactComponent as SunflowerSVG } from "../../resources/sunflower.svg"; // Path to your SVG file
import { ReactComponent as PenguinSVG } from "../../resources/penguin.svg"; // Path to your SVG file
import DialogButton from "../DialogButton";

const Advent1: React.FC = () => {
  return (
    <DialogButton
      body={
        <span className="inline-flex mt-5">
          <div className="w-[120px]">
            <PenguinSVG width="100px" height="75px" />
            <p>(det her er bent)</p>
          </div>
          <SunflowerSVG width="100px" height="75px" />
        </span>
      }
      title="Bare en solsikke til min solsikke <3"
      buttonText="Klik her🌞"
    />
  );
};

export default Advent1;
