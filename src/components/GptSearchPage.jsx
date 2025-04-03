import React from "react";
import { netflix_bg } from "../utills/Constants";
import { useSelector } from "react-redux";
import { langConfig } from "../utills/langConfig";

const GptSearchPage = () => {
    const selectedLanguage = useSelector(store => store.language.language)
    // console.log(selectedLanguage.language);
    
  return (
    <>
      <div className="w-full h-screen relative">
        <img className="w-full h-full object-cover" src={netflix_bg} />
        <div className=" absolute top-1/2 left-1/2 ransform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-1/2 flex sm:max-w-[500px]">
          <input
            className="outline-none bg-black text-white w-[90%] p-2.5 rounded-bl-xl rounded-tl-xl"
            placeholder={langConfig[selectedLanguage]?.placeHolder}
          />
          <button className="cursor-pointer text-white bg-red-600 p-2.5 rounded-tr-xl rounded-br-xl bg-gradient-to-l from-black">
            {langConfig[selectedLanguage]?.search}
          </button>
        </div>
      </div>

      <div>
      </div>
    </>
  );
};

export default GptSearchPage;
