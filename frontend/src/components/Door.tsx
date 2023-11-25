import React, { ReactNode, useState } from 'react';
import { ReactComponent as SunflowerSVG } from '../resources/sunflower.svg'; // Path to your SVG file

interface DoorProps {
    children: ReactNode;
    titel: string;
}

const Door: React.FC<DoorProps> = ({ children, titel }) => {
    const todaysDate = (new Date()).getDate();
    const [isOpen, setIsOpen] = useState(Number(titel) < todaysDate);

    const basicDoorStyle = "absolute w-full h-full bg-gradient-to-br from-teal-300 to-blue-300 rounded"

    const doorStyle = isOpen 
        ? "transform -translate-x-full transition duration-500 ease-in-out"
        : "transition duration-500 ease-in-out";

    return (
        <div className={`relative overflow-hidden cursor-pointer border`} onClick={
            () => {
                if (Number(titel) === todaysDate) {
                    setIsOpen(true)
                }
            }}>
            <div className={basicDoorStyle + " " + doorStyle}>
                <p className="text-blue-800 text-2xl font-bold mt-5">
                    {titel}
                </p>
            </div>
            {children}
        </div>
    );
};

export default Door;
