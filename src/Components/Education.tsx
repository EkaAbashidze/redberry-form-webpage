import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Arrow from "./Svg/Arrow";

export default function Education() {
  return (
    <div className="flex">
      <div className="w-[57%] h-screen bg-lightgray px-[150px] pt-12 pb-16">
        <Header heading="ᲒᲐᲜᲐᲗᲚᲔᲑᲐ" page={3} prevPage="/Experience" />
        <form action=""></form>
      </div>

      <div className="2-[43%] h-screen"></div>
    </div>
  );
}