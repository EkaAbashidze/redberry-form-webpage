import React, { FormEvent, useState } from "react";
import Header from "./Header";
import useMultistepForm from "./useMultistepForm";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import FormWrapper from "./FormWrapper";
import Preview from "./Preview";

export interface Experiences {
  id: string;
  position: string;
  employer: string;
  start_date: string;
  due_date: string;
  description: string;
}

export interface Educations {
  id: string;
  institute: string;
  degree: string;
  due_date: string;
  description: string;
}

export type FormData = {
  name: string;
  surname: string;
  email: string;
  phone_number: null | string;
  experiences: Experiences[];
  educations: Educations[];
  image: File | null;
  about_me: string;
};

const USER_DATA: FormData = {
  name: "",
  surname: "",
  email: "",
  phone_number: null,
  experiences: [
    {
      id: "",
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ],
  educations: [
    {
      id: "",
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    },
  ],
  image: null,
  about_me: "",
};

export default function Form() {

  const [data, setData] = useState(USER_DATA);

  
  const { steps, currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultistepForm([<PersonalForm />, <ExperienceForm />, <EducationForm />]);

  const currentStep = (currentStepIndex + 1) / steps.length;

  const Navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    return next();
  }

  return (
    <div className="flex">
      <form onSubmit={onSubmit}>
        <FormWrapper>
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

          <div className="pt-[115px]">
            <Buttons
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              back={back}
              next={next}
            />
          </div>
        </FormWrapper>
      </form>
      <Preview data={data} />
    </div>
  );
}
