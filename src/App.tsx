import React from "react";
import Draw from "./components/Draw";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import GlobalProvider from "./global/GlobalProvider";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <div className="max-w-screen flex flex-col items-center m-3 gap-y-5">
        <h2 className="uppercase tracking-widest text-2xl font-bold text-white">
          Hangman game
        </h2>

        <main className="relative flex flex-col gap-y-4 items-center">
          <Draw />
          <Word />
          <Keyboard />
        </main>
      </div>
    </GlobalProvider>
  );
};

export default App;
