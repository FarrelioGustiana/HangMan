import React from "react";
import { GlobalContextProps, useGlobal } from "../global/GlobalProvider";

const head: JSX.Element = (
  <div
    key="Head"
    className="h-9 w-9 rounded-full border-white border-[5.5px] absolute -right-4 top-6"
  ></div>
);

const body: JSX.Element = (
  <div
    key="Body"
    className="bg-white w-1.5 h-[88px] absolute right-0 top-[59px]"
  ></div>
);

const rightHand: JSX.Element = (
  <div
    key="Right Hand"
    className="bg-white w-1.5 h-[50px] absolute -right-[20px] top-[40px] -rotate-[125deg] rounded"
  ></div>
);

const leftHand: JSX.Element = (
  <div
    key="Left Hand"
    className="bg-white w-1.5 h-[50px] absolute right-[20px] top-[40px] rotate-[125deg] rounded"
  ></div>
);

const rightLeg: JSX.Element = (
  <div
    key="Right Leg"
    className="bg-white w-1.5 h-[60px] absolute right-[10px] top-[140px] rotate-[20deg] rounded"
  ></div>
);

const leftLeg: JSX.Element = (
  <div
    key="Left Leg"
    className="bg-white w-1.5 h-[60px] absolute -right-[10px] top-[140px] -rotate-[20deg] rounded"
  ></div>
);

const bodyParts: JSX.Element[] = [
  head,
  body,
  rightHand,
  leftHand,
  rightLeg,
  leftLeg,
];

const Body: React.FC = () => {
  const { incorrectLetters } = useGlobal() as GlobalContextProps;
  return (
    <>
      {/* ## BODY PARTS ## */}
      {bodyParts.slice(0, incorrectLetters.length)}
      {/* ^^ BODY PARTS ^^ */}
    </>
  );
};

export default Body;
