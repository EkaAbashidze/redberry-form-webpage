import React from "react";

type ButtonsProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
};

export default function Buttons({
  isFirstStep,
  isLastStep,
  back,
}: ButtonsProps) {
  return (
    <div>
      <div className="flex w-[100%] justify-between">
        <div
          onClick={back}
          className={`cursor-pointer bg-blue text-white w-151 h-48 rounded flex justify-center items-center text-base leading-20px tracking-0.08em active:scale-0.98 ${
            !isFirstStep ? "invisible" : "visible"
          }`}
        >
          ᲣᲙᲐᲜ
        </div>

        <button className="cursor-pointer bg-blue text-white w-151 h-48 rounded flex justify-center items-center text-base leading-[20px] tracking-[0.08em] active:scale-[0.98]">
          {isLastStep ? "ᲓᲐᲡᲠᲣᲚᲔᲑᲐ" : "ᲨᲔᲛᲓᲔᲒᲘ"}
        </button>
      </div>
    </div>
  );
}
