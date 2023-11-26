import React, { ReactNode, useState } from "react";

interface DoorProps {
  children: ReactNode;
  title: string;
}

const Door: React.FC<DoorProps> = ({ children, title }) => {
  // Assuming title is the date for which the door should open
  const todaysDate = new Date().getDate();
  //const todaysDate = 2;
  const [isOpen, setIsOpen] = useState(Number(title) < todaysDate);

  const basicDoorStyle =
    "absolute bg-gradient-to-br from-teal-300 to-blue-300 rounded w-full h-full flex justify-center items-center z-50";

  const doorStyle = isOpen
    ? "transform -translate-x-full transition duration-500 ease-in-out"
    : "transition duration-500 ease-in-out";

  return (
    <div
      className="flex justify-center items-center relative overflow-hidden cursor-pointer bg-white bg-opacity-30 rounded w-36 h-28"
      onClick={() => {
        if (Number(title) <= todaysDate) {
          setIsOpen(true);
        }
      }}
    >
      <div className={`${basicDoorStyle} ${doorStyle}`}>
        <p className="text-blue-800 text-2xl font-bold">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default Door;
