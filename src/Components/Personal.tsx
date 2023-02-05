import React from "react";
import Header from "./Header";

export default function Personal() {
  return (
    <div className="flex">
      <div className="w-[57%] h-screen bg-lightgray px-[150px] pt-12 pb-16">
        <Header heading="ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ" page={1} prevPage="/"/>
      </div>

      <div className="2-[43%] h-screen"></div>
    </div>
  );
}
