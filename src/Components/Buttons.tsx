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
  next,
}: ButtonsProps) {
  return (
    <div>
      <div className="flex w-[100%] px-[150px] justify-between mt-[-113px]">
        {isFirstStep && (
          <button
            type="button"
            onClick={back}
            className="cursor-pointer bg-blue text-white w-151 h-48 rounded flex justify-center items-center text-base leading-[20px] tracking-[0.08em] active:scale-[0.98]"
          >
            ᲣᲙᲐᲜ
          </button>
        )}

        <button
          type="submit"
          onClick={next}
          className="cursor-pointer bg-blue text-white w-151 h-48 rounded flex justify-center items-center text-base leading-[20px] tracking-[0.08em] active:scale-[0.98]"
        >
          {isLastStep ? "ᲓᲐᲡᲠᲣᲚᲔᲑᲐ" : "ᲨᲔᲛᲓᲔᲒᲘ"}
        </button>
      </div>
    </div>
  );
}
