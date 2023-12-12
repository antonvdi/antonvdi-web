import React, { useContext } from "react";
import { ChristmasContext } from "../../pages/MariaPage";
import { Listbox } from "@headlessui/react";
import DialogButton from "../DialogButton";

const Advent17: React.FC = () => {
  const { context, setContext } = useContext(ChristmasContext);

  const christmasColors = [
    { color: 0, label: "Rød" },
    { color: 1, label: "Grøn" },
    { color: 2, label: "Gul" },
    { color: 3, label: "Blå" },
    { color: 4, label: "Lilla" },
    { color: 5, label: "Pink" },
    { color: 6, label: "Orange" },
    { color: 7, label: "Hvid" },
    { color: 8, label: "Grå" },
    { color: 9, label: "Mørkeblå" },
  ];

  const switchColor = (value: { color: number; label: string } | null) => {
    setContext({ ...context, christmasColor: value });
  };

  return (
    <>
      <DialogButton
        title=""
        buttonText="Julelyset skal da have en ny farve"
        buttonColor="bg-red-600"
        buttonColorHover="hover:bg-red-800"
        body={
          <Listbox value={context.christmasColor} onChange={switchColor}>
            <Listbox.Button className="w-full py-2 px-4 bg-white text-left rounded-md shadow-md border border-gray-300">
              Vælg en farve til julelyset!
            </Listbox.Button>
            <Listbox.Options className="relative mt-1 w-lg py-1 rounded-md shadow-lg bg-white max-h-60 overflow-auto z-20 origin-top-right right-0">
              {christmasColors.map((color) => (
                <Listbox.Option
                  key={color.color}
                  value={color}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                      active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                    }`
                  }
                >
                  <span className={`block truncate ${color.color}`}>
                    {color.label}
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        }
      />
    </>
  );
};

export default Advent17;
