import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./Svg/Arrow";
import { FormData } from "./Form";

export default function Header({
  heading,
  page,
  prevPage,
  totalSteps,
  data,
  onClick,
}: {
  heading: string;
  page: number;
  prevPage: string;
  totalSteps: number;
  data: FormData;
  onClick: () => void;
}) {
  return (
    <>
      <div className="flex justify-between items-start font-normal text-xl leading-[24px] w-[900px] gap-x-[61px] mb-[77px] ml-[-100px]">
        <Link
          to={prevPage}
          className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
          onClick={() => onClick()}
        >
          <Arrow />
        </Link>

        <div className="flex items-center justify-between w-full border-b-[1px] border-b-offblack pb-3">
          <h1 className="font-bold text-2xl leading-[29px]">{heading}</h1>
          <h3>
            {page}/{totalSteps}
          </h3>
        </div>
      </div>
    </>
  );
}
