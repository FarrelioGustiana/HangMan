import React from "react";
import { useGlobal, GlobalContextProps } from "../global/GlobalProvider";

const Word: React.FC = () => {
  const { wordToGuess, guessedWords, isLose } =
    useGlobal() as GlobalContextProps;
  return (
    <div>
      <div className="flex justify-center gap-4">
        {wordToGuess.split("").map((letter, idx) => {
          const isCorrect = guessedWords.includes(letter);
          return (
            <p key={idx} className="border-b-4 px-2">
              <span
                className={`font-mono text-white uppercase font-bold text-2xl ${
                  isCorrect || isLose ? "visible" : "invisible"
                } ${!isCorrect && isLose ? "text-yellow-300" : "text-white"}`}
              >
                {letter}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Word;
