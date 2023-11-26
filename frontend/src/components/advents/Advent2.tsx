import React from "react";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Image from "../../resources/image.png";

const Advent2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={openDialog}
        className="bg-indigo-600 hover:bg-indigo-800 hover:scale-105 text-white py-2 px-4 rounded transform active:scale-95 transition-transform"
      >
        Klik på mig🤍
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-blue-100 p-5">
            <Dialog.Title className="font-bold">
              Glædelig jul Nissemor 🧑‍🎄
            </Dialog.Title>

            <img
              src={Image}
              alt="Description"
              className="rounded-lg shadow-lg"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-indigo-600 hover:bg-indigo-800 hover:scale-105 text-white py-1 px-4 rounded transform active:scale-95 transition-transform"
            >
              Luk
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Advent2;
