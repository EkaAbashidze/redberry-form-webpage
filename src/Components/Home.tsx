import React from "react";
import { Link } from "react-router-dom";
import bgLogo from "../assets/redberry-bg-logo.png";
import Logo from "../assets/redberry-logo.png";

export default function Home() {
  return (
    <div className=" bg-bg-main bg-cover bg-no-repeat bg-center h-screen pt-6 px-[70px]">
      <img src={Logo} alt="" />
      <div className="h-px w-[1780px] bg-offblack mt-[26px]"></div>
      <img
        className="absolute top-[43%] left-[57%] mix-blend-multiply "
        src={bgLogo}
        alt=""
      />
      <Link
        to="/form"
        className="bg-offblack w-[464px] h-[60px] rounded-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] active:scale-[0.98]"
      >
        <h3 className="h-full flex flex-col text-center justify-center text-white text-xl font-medium leading-[24px]">
          ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </h3>
      </Link>
    </div>
  );
}
