import React, { ReactNode } from "react";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

interface DialogButtonProps {
  buttonText: string;
  body: string | ReactNode;
  title: string;
  buttonColor?: string;
  buttonColorHover?: string;
}

const DialogButton: React.FC<DialogButtonProps> = ({
  buttonText,
  body,
  title,
  buttonColor,
  buttonColorHover,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={openDialog}
        className={`${buttonColor ?? "bg-indigo-600"} ${
          buttonColorHover ?? "hover:bg-indigo-800"
        } hover:scale-105 text-white py-2 px-4 rounded transform active:scale-95 transition-transform`}
      >
        {buttonText}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="max-w-xxl rounded bg-blue-100 p-5">
            <Dialog.Title className="font-bold">{title}</Dialog.Title>
            <Dialog.Description className={""}>{body}</Dialog.Description>
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

export default DialogButton;
