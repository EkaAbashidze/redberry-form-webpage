import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import { Experiences } from "./Form";
import Check from "./Svg/Check";
import Warning from "./Svg/Warning";

type userData = {
  experiences: Experiences[];
};

type ExperienceFormProps = userData & {
  updateInputs: (Arr: Experiences[]) => void;
};

export default function ExperienceFormExample({
  experiences,
  updateInputs,
}: ExperienceFormProps) {
  const patternString = /^[ა-ჰA-Za-z]{2,}$/;
  const positionIsValid = patternString.test(experiences[0].position);
  const employerIsValid = patternString.test(experiences[0].employer);
  const descriptionIsValid = patternString.test(experiences[0].description);

  const [isPositionValidated, setIsPositionValidated] = useState(false);
  const [isEmployerValidated, setIsEmployerValidated] = useState(false);
  const [descriptionInputBlurred, setDescriptionInputBlurred] = useState(false);

  const [allExperiences, setAllExperiences] = useState(experiences);

  const addExperience = () => {
    setAllExperiences((prevAllExperiences) => [
      ...prevAllExperiences,
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
    console.log("Hello");
  };

  return (
    <div>
      {allExperiences.map((experiences, idx) => (
        <>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="position"
                className="font-medium text-base leading-[21px]"
              >
                თანამდებობა
              </label>

              <div className="flex items-center">
                <input
                  required
                  type="text"
                  name="position"
                  value={allExperiences[idx].position}
                  onChange={(e) => {
                    const clone = allExperiences.slice();
                    clone[idx].position = e.target.value;
                    setAllExperiences(clone);
                    updateInputs(clone);
                  }}
                  onBlur={() => setIsPositionValidated(true)}
                  pattern="^[ა-ჰA-Za-z]{2,}$"
                  placeholder="დეველოპერი, დიზაინერი, ა.შ."
                  className={`w-798 h-12 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60 focus:outline-none ${
                    isPositionValidated &&
                    experiences.position &&
                    positionIsValid
                      ? "border-green"
                      : isPositionValidated &&
                        experiences.position &&
                        "border-lightred"
                  }`}
                />
                {isPositionValidated &&
                allExperiences[idx].position &&
                positionIsValid ? (
                  <Check />
                ) : (
                  isPositionValidated &&
                  allExperiences[idx].position && <Warning />
                )}
              </div>
              <p className="font-light text-sm leading-[21px] text-textgray">
                მინიმუმ 2 სიმბოლო
              </p>
            </div>

            <div className="flex flex-col gap-y-2 pt-[29px]">
              <label
                htmlFor="employer"
                className="font-medium text-base leading-[21px]"
              >
                დამსაქმებელი
              </label>

              <div className="flex items-center">
                <input
                  required
                  type="text"
                  name="employer"
                  value={allExperiences[idx].employer}
                  onChange={(e) => {
                    const clone = allExperiences.slice();
                    clone[idx].employer = e.target.value;
                    setAllExperiences(clone);
                    updateInputs(clone);
                  }}
                  onBlur={() => setIsEmployerValidated(true)}
                  pattern="^[ა-ჰA-Za-z]{2,}$"
                  placeholder="დამსაქმებელი"
                  className={`w-798 h-12 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60 focus:outline-none ${
                    isEmployerValidated &&
                    allExperiences[idx].employer &&
                    employerIsValid
                      ? "border-green"
                      : isEmployerValidated &&
                        allExperiences[idx].employer &&
                        "border-lightred"
                  }`}
                />
                {isEmployerValidated &&
                allExperiences[idx].employer &&
                employerIsValid ? (
                  <Check />
                ) : (
                  isEmployerValidated &&
                  allExperiences[idx].employer && <Warning />
                )}
              </div>

              <p className="font-light text-sm leading-[21px] text-textgray">
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
          </div>

          <div className="flex gap-x-14 mt-[31px]">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="start_date"
                className="font-medium text-base leading-[21px]"
              >
                დაწყების რიცხვი
              </label>
              <input
                required
                type="date"
                name="start_date"
                onChange={(e) => {
                  const clone = allExperiences.slice();
                  clone[idx].start_date = e.target.value;
                  setAllExperiences(clone);
                  updateInputs(clone);
                }}
                value={allExperiences[idx].start_date.toString().substr(0, 10)}
                className="w-[371px] h-12 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="due_date"
                className="font-medium text-base leading-[21px]"
              >
                დამთავრების რიცხვი
              </label>
              <input
                required
                type="date"
                name="due_date"
                onChange={(e) => {
                  const clone = allExperiences.slice();
                  clone[idx].due_date = e.target.value;
                  setAllExperiences(clone);
                  updateInputs(clone);
                }}
                value={allExperiences[idx].due_date.toString().substr(0, 10)}
                className="w-[371px] h-12 border border-gray rounded py-3.5 px-4 leading-[21px] opacity-60 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-[33px] flex flex-col gap-y-2">
            <label htmlFor="description">აღწერა</label>
            <textarea
              required
              name="description"
              value={allExperiences[idx].description}
              onChange={(e) => {
                const clone = allExperiences.slice();
                clone[idx].description = e.target.value;
                setAllExperiences(clone);
                updateInputs(clone);
              }}
              onBlur={() => setDescriptionInputBlurred(true)}
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              className={`w-798 h-123 border border-gray rounded py-[13px] px-4 leading-21px opacity-60 resize-none flex items-start focus:outline-none ${
                descriptionInputBlurred &&
                allExperiences[idx].description &&
                descriptionIsValid
                  ? "border-green"
                  : descriptionInputBlurred &&
                    allExperiences[idx].description &&
                    "border-lightred"
              }`}
            ></textarea>
          </div>

          <div className="w-798 h-px bg-[#C1C1C1] mt-[58px] mb-[45px]"></div>
        </>
      ))}
      <button
        type="button"
        onClick={() => addExperience()}
        className="cursor-pointer bg-lightgrayblue text-white w-289 h-48 rounded flex justify-center items-center text-base leading-[20px]"
      >
        მეტი გამოცდილების დამატება
      </button>
    </div>
  );
}
