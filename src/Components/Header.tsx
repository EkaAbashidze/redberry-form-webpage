import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./Svg/Arrow";

export default function Header({ heading, page, prevPage, totalSteps }: { heading: string; page: number, prevPage: string, totalSteps: number }) {
  return (
    <>
      <div className="flex justify-between items-center font-normal text-xl leading-[24px]">
        <Link
          to={prevPage}
          className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute top-[45px] left-[48px]"
        >
          <Arrow/>
        </Link>
        <h1 className="font-bold text-2xl leading-[29px]">{heading}</h1>
        <h3>{page}/{totalSteps}</h3>
      </div>
      <div className="h-px w-[798px] bg-offblack mt-3"></div>
    </>
  );
}
