import React from "react";
import { ClipboardIcon, LinkIcon } from "@heroicons/react/24/outline";

const LandingPage: React.FC = () => {
  const handleLinkedInButton = () => {
    window.open("https://www.linkedin.com/in/anton-irvold/", "_blank");
  };

  const handleGoToExternalPage = () => {
    window.open(
      "https://irvold.dk/index.php/2024/06/07/ai-og-software-der-booster/",
      "_blank"
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anton@irvold.dk");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 to-blue-200 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-400">
        Anton Irvold <span className="text-blue-900">AI Consultancy</span>
      </h1>
      <p className="text-blue-700 mt-4">Software, AI, automatisering</p>
      <div className="mt-5 flex">
        <button
          className="mr-5 bg-linkedin-500 hover:bg-linkedin-700 hover:scale-105 text-white font-bold py-2 px-4 rounded transform active:scale-95 transition-transform"
          onClick={handleLinkedInButton}
        >
          LinkedIn
        </button>
        <button
          className="mr-5 bg-teal-500 hover:bg-teal-700 hover:scale-105 text-white font-bold py-2 px-4 rounded flex transform active:scale-95 transition-transform items-center "
          onClick={handleCopyEmail}
        >
          <ClipboardIcon className="h-5 w-5 mr-1" />
          E-mail
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold py-2 px-4 rounded flex transform active:scale-95 transition-transform items-center "
          onClick={handleGoToExternalPage}
        >
          <LinkIcon className="h-5 w-5 mr-1" />
          Læs mere
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
