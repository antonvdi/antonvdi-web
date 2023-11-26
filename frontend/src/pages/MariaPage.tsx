import React from "react";
import ChristmasCalendar from "../components/ChristmasCalendar";

const MariaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 to-blue-200 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-sky-500">
        Marias julekalender :)
      </h1>
      <ChristmasCalendar />
    </div>
  );
};

export default MariaPage;
