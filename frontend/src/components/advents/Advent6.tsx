import React from "react";
import DialogButton from "../DialogButton";
import { ReactComponent as PenguinSVG } from "../../resources/penguin.svg";

const Advent6: React.FC = () => {
  return (
    <>
      <DialogButton
        title="Fordi Kanye x RI HA NNA er altid godt"
        buttonText="En god sang :)"
        buttonColor="bg-orange-600"
        buttonColorHover="hover:bg-orange-800"
        body={
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/19a3JfW8BQwqHWUMbcqSx8?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
              }}
            ></div>
            <div className="w-[120px] mt-2">
              <PenguinSVG width="100px" height="75px" />
              <p>
                <small>bent kan godt lide rihanna</small>
              </p>
            </div>
          </>
        }
      />
    </>
  );
};

export default Advent6;
