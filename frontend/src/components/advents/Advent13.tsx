import React, { useEffect, useState } from "react";

const Advent13: React.FC = () => {
  const christmasEve = new Date(2023, 11, 24);

  const makeTimeString = (diffTime: number) => {
    let days = diffTime / (24 * 60 * 60 * 1000);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let secs = (minutes % 1) * 60;
    return [
      Math.floor(days),
      Math.floor(hours),
      Math.floor(minutes),
      Math.floor(secs),
    ];
  };

  const [timeArray, setTimeArray] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDiff = christmasEve.getTime() - new Date().getTime();
      setTimeArray(makeTimeString(timeDiff));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>{`${timeArray[0]} dage, ${timeArray[1]} timer, ${timeArray[2]} minutter og ${timeArray[3]} sekunder til Jul!`}</>
  );
};

export default Advent13;
