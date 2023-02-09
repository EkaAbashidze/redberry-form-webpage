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
  position: string;
  employer: string;
  start_date: string;
  due_date: string;
  description: string;
}

export interface Educations {
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
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ],
  educations: [
    {
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

  function updateInputs(inputs: Partial<FormData>) {
    setData((prevData) => {
      return { ...prevData, ...inputs };
    });
  }

  const updateExperiences = (Arr: Experiences[]) => {
    setData((prevData) => {
      return { ...prevData, experiences: Arr };
    });
  };

  const updateEducations = (Arr: Educations[]) => {
    setData((prevData) => {
      return { ...prevData, educations: Arr };
    });
  };

  const { steps, currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultistepForm([
      <PersonalForm {...data} updateInputs={updateInputs} />,
      <ExperienceForm {...data} updateInputs={updateExperiences} />,
      <EducationForm {...data} updateInputs={updateEducations} />,
    ]);

  const Navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    Navigate("/lastpage", { state: { data: data } });
  }

  return (
    <div className="flex">
      <form onSubmit={onSubmit}>
        <FormWrapper>
          <div
            className="flex justify-between
        "
          >
            <Header
              page={currentStepIndex + 1}
              heading="ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"
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
