import React, { FormEvent, useState } from "react";
import Header from "./Header";
import useMultistepForm from "./useMultistepForm";
import { useNavigate } from "react-router-dom";

import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

export default function Form() {
  const { steps, currentStepIndex, step, back, next} =
    useMultistepForm([
      <Personal />,
      <Experience/>,
      <Education />
    ]);

  const currentStep = (currentStepIndex + 1) / steps.length;

  const Navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    return next();
  }

  return (
    <div className="flex">
      <form onSubmit={onSubmit}>
        <div
          className="absolute pl-[150px] pt-[47px] flex justify-between
        "
        >
          <Header
            heading="ᲘᲜᲤᲝ"
            page={currentStepIndex + 1}
            prevPage="/"
            totalSteps={steps.length}
          />
        </div>
        {step}
      </form>
    </div>
  );
}
