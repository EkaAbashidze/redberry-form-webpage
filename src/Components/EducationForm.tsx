import React, { useEffect, useState } from "react";
import FormWrapper from "./FormWrapper";
import { Educations } from "./Form";
import Check from "./Svg/Check";
import Warning from "./Svg/Warning";
import { Degree } from "./Form";

type userData = {
  educations: Educations[];
};

type EducationProps = userData & {
  updateInputs: (inputs: Educations[]) => void;
  degrees: Degree[];
};

export default function EducationFormExample({
  educations,
  updateInputs,
  degrees,
}: EducationProps) {
  const patternInstitute = /^[ა-ჰ]{2,}$/;
  const instituteIsValid = patternInstitute.test(educations[0].institute);
  const patternString = /^[ა-ჰA-Za-z]{2,}$/;
  const educationsIsValid = patternString.test(educations[0].degree.toString());
  const descriptionIsValid = patternString.test(educations[0].description);

  const [isInstituteValidated, setIsInstituteValidated] = useState(false);
  const [isDegreeValidated, setIsDegreeValidated] = useState(false);
  const [descriptionInputBlurred, setDescriptionInputBlurred] = useState(false);

  const [allEducations, setAllEducations] = useState(educations);

  const addEducations = () => {
    setAllEducations((prevAllEducations) => [
      ...prevAllEducations,
      {
        institute: "",
        degree: 0,
        due_date: "",
        description: "",
      },
    ]);
  };

  return (
    <div>
      {allEducations.map((educations, idx) => (
        <>
          {" "}
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="institute"
                className="font-medium text-base leading-[21px]"
              >
                სასწავლებელი
              </label>

              <div className="flex items-center">
                <input
                  required
                  type="text"
                  name="institute"
                  value={allEducations[idx].institute}
                  onChange={(e) => {
                    const clone = allEducations.slice();
                    clone[idx].institute = e.target.value;
                    setAllEducations(clone);
                    updateInputs(clone);
                  }}
                  onBlur={() => setIsInstituteValidated(true)}
                  placeholder="სასწავლებელი"
                  className={`w-798 h-12 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60 focus:outline-none ${
                    isInstituteValidated &&
                    allEducations[idx].institute &&
                    instituteIsValid
                      ? "border-green"
                      : isInstituteValidated &&
                        allEducations[idx].institute &&
                        "border-lightred"
                  }`}
                />
                {isInstituteValidated &&
                allEducations[idx].institute &&
                instituteIsValid ? (
                  <Check />
                ) : (
                  isInstituteValidated &&
                  allEducations[idx].institute && <Warning />
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
                htmlFor="degree"
                className="font-medium text-base leading-[21px]"
              >
                ხარისხი
              </label>

              <select
                required
                name="degree"
                value={allEducations[idx].degree}
                onChange={(e) => {
                  const clone = allEducations.slice();
                  clone[idx].degree = +e.target.value;
                  setAllEducations(clone);
                  updateInputs(clone);
                }}
                onBlur={() => setIsDegreeValidated(true)}
                placeholder="აირჩიეთ ხარისხი"
                className={`w-[371px] h-12 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60 focus:outline-none ${
                  isDegreeValidated &&
                  allEducations[idx].degree &&
                  educationsIsValid
                    ? "border-green"
                    : isDegreeValidated &&
                      allEducations[idx].degree &&
                      "border-green"
                }`}
              >
                <option disabled selected hidden value="">
                  აირჩიეთ ხარისხი
                </option>

                {degrees.map((degree, index) => (
                  <option key={index} value={degree.id}>
                    {degree.title}
                  </option>
                ))}
              </select>
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
                value={allEducations[idx].due_date.toString().substr(0, 10)}
                onChange={(e) => {
                  const clone = allEducations.slice();
                  clone[idx].due_date = e.target.value;
                  setAllEducations(clone);
                  updateInputs(clone);
                }}
                className="w-[371px] h-12 border border-gray rounded py-3.5 px-4 leading-[21px] opacity-60 focus:outline-none"
              />
            </div>
          </div>
          <div className="pt-[33px] flex flex-col gap-y-2">
            <label htmlFor="description">აღწერა</label>
            <textarea
              name="description"
              value={allEducations[idx].description}
              onChange={(e) => {
                const clone = allEducations.slice();
                clone[idx].description = e.target.value;
                setAllEducations(clone);
                updateInputs(clone);
              }}
              onBlur={() => setDescriptionInputBlurred(true)}
              placeholder="განათლების აღწერა"
              className={`w-798 h-179 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60 resize-none focus:outline-none ${
                descriptionInputBlurred &&
                allEducations[idx].description &&
                descriptionIsValid
                  ? "border-green"
                  : descriptionInputBlurred &&
                    allEducations[idx].description &&
                    "border-lightred"
              }
              `}
            ></textarea>
          </div>
          <div className="w-798 h-px bg-[#C1C1C1] mt-[58px] mb-[45px]"></div>
        </>
      ))}
      <button
        type="button"
        onClick={() => addEducations()}
        className="cursor-pointer bg-lightgrayblue text-white w-289 h-48 rounded flex justify-center items-center text-base leading-[20px]"
      >
        სხვა სასწავლებლის დამატება
      </button>
    </div>
  );
}
