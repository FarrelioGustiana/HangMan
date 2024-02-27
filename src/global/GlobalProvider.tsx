import React, { useCallback, useContext, useEffect } from "react";
import { useState, createContext, ReactNode } from "react";
import wordsList from "../wordList.json";

type GlobalProviderProps = {
  children: ReactNode;
};

export type GlobalContextProps = {
  isLose: boolean;
  isWin: boolean;
  addLetter: (letter: string) => void;
  wordToGuess: string;
  setWordToGuess: React.Dispatch<React.SetStateAction<string>>;
  guessedWords: string[];
  incorrectLetters: string[];
  activeLetters: string[];
};

const GlobalContext = createContext<GlobalContextProps | null>(null);
export const useGlobal = () =>
  useContext<GlobalContextProps | null>(GlobalContext);

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [wordToGuess, setWordToGuess] = useState<string>(
    wordsList[Math.floor(Math.random() * wordsList.length)].toLowerCase()
  );

  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  const incorrectLetters: string[] = guessedWords.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const activeLetters: string[] = guessedWords.filter((letter) =>
    wordToGuess.includes(letter)
  );

  const addLetter = useCallback(
    (letter: string): void => {
      if (!guessedWords.includes(letter))
        setGuessedWords((prev) => [...prev, letter]);
    },
    [guessedWords]
  );

  const isWin = wordToGuess
    .split("")
    .every((letter) => guessedWords.includes(letter));
  const isLose: boolean = incorrectLetters.length === 6;

  console.log(wordToGuess);
  useEffect(() => {
    const handlerPress = (e: KeyboardEvent) => {
      if (!/^[a-zA-Z]$/ || isLose || isWin) return;

      addLetter(e.key.toLowerCase());
    };

    document.addEventListener("keypress", handlerPress);

    return () => {
      document.removeEventListener("keypress", handlerPress);
    };
  }, [guessedWords, isWin, isLose]);

  return (
    <GlobalContext.Provider
      value={{
        isLose,
        isWin,
        addLetter,
        wordToGuess,
        setWordToGuess,
        guessedWords,
        incorrectLetters,
        activeLetters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
