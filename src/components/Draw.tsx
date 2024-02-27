import React from "react";
import Body from "./Body";

const Draw: React.FC = () => {
  return (
    <div className="relative max-w-[180px]">
      <Body />

      <div className="w-1.5 h-6 absolute right-0 bg-white"></div>
      <div className="h-1.5 bg-white w-[100px] ml-[80px]"></div>
      <div className="w-1.5 h-[220px] bg-white ml-[80px]"></div>
      <div className="h-1.5 w-[170px] bg-white"></div>
    </div>
  );
};

export default Draw;
