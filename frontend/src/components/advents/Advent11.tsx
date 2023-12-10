import React from "react";
import DialogButton from "../DialogButton";

const Advent11: React.FC = () => {
  return (
    <>
      <DialogButton
        title="videoer der lever RENT FREE i mit hoved"
        buttonText="Videoer jeg synes er sjove"
        buttonColor="bg-emerald-600"
        buttonColorHover="hover:bg-emerald-800"
        body={
          <div className="max-width-sm overflow-y-scroll max-h-96">
            <div
              className="pb-4"
              dangerouslySetInnerHTML={{
                __html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/S6UkUmFaLYM?si=mIdQ2SOscz59jG7b&amp;clip=UgkxJB31M3igBVd2BMe8C04ShJBIQqinjDE5&amp;clipt=EPOMAhjB4wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
              }}
            ></div>
            <div
              className="pb-4"
              dangerouslySetInnerHTML={{
                __html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/lsLDtt1_PuQ?si=uIChkmeWHbKDMWuO&amp;clip=UgkxRJdSXo50d1kUi2MGLpY1lvyhujLXOxHZ&amp;clipt=EMGoKBjf6ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
              }}
            ></div>
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zL46tH_0-cA?si=9n3b60C9bIxXTUH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
              }}
            ></div>
          </div>
        }
      />
    </>
  );
};

export default Advent11;
