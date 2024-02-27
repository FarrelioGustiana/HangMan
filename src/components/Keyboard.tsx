import React from "react";
import { useGlobal, GlobalContextProps } from "../global/GlobalProvider";

const Keyboard: React.FC = () => {
  const { addLetter, activeLetters, incorrectLetters, isLose, isWin } =
    useGlobal() as GlobalContextProps;
  const characters: string = "qwertyuiopasdfghjklzxcvbnm";
  const rows = [characters.indexOf("a"), characters.indexOf("z")];
  const keys: string[][] = [
    characters.slice(0, rows[0]).split(""),
    characters.slice(rows[0], rows[1]).split(""),
    characters.slice(rows[1]).split(""),
  ];
  const isActive = (key: string): boolean => {
    if (activeLetters.includes(key)) return true;
    return false;
  };

  const isInactive = (key: string): boolean => {
    if (incorrectLetters.includes(key)) return true;
    return false;
  };

  return (
    <div>
      <div className="flex flex-col gap-y-3 sm:gap-y-3">
        {keys.map((key, idx) => (
          <div key={idx} className="flex gap-3 sm:gap-5 justify-center">
            {key.map((letter) => (
              <button
                key={letter}
                disabled={
                  isActive(letter) || isInactive(letter) || isLose || isWin
                }
                className={`btn text-white uppercase border-[2.5px] sm:border-[3px] aspect-square h-7 w-7 sm:w-10 sm:h-10 flex justify-center items-center font-bold transition-all text-[13px] sm:text-[15px] rounded-md ${
                  isInactive(letter)
                    ? "opacity-30 cursor-default"
                    : "opacity-100"
                } ${
                  isActive(letter)
                    ? "border-yellow-300 text-yellow-300 cursor-default"
                    : "border-white text-white"
                }`}
                onClick={() => addLetter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
