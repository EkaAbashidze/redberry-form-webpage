import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Preview from "./Preview";
import Arrow from "./Svg/Arrow";
import CloseIcon from "./Svg/CloseIcon";

export default function LastPage() {
  const location = useLocation();
  const [popUpPreview, setPopUpPreview] = useState(true);

  return (
    <div className="h-[1263px] pt-14 pl-12 pr-16">
      <div className="flex justify-between">
        <Link
          to="/"
          className="w-10 h-10 bg-lightgray rounded-full flex justify-center items-center top-[45px] left-[48px]"
        >
          <Arrow />
        </Link>

        <div className="flex gap-x-14">
          <div className="w-[822px] h-[1080px] border-[0.8px] border-black ">
            <Preview
              data={location.state.data}
              degrees={location.state.degrees}
            />
          </div>

          <div
            className={`w-[427px] h-[167px] flex pt-4 pl-7 rounded border border-[#E4E4E4] shadow-shadow font-medium text-3xl ${
              !popUpPreview ? "invisible" : "visible"
            }`}
          >
            <h3 className="pt-6">რეზიუმე წარმატებით გაიგზავნა 🎉</h3>
            <div
              onClick={() => setPopUpPreview(false)}
              className="flex self-start pr-3"
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
