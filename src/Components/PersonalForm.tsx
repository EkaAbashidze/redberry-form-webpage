import React, { useState } from "react";
import Check from "./Svg/Check";
import Warning from "./Svg/Warning";
import WarningName from "./Svg/WarningName";
import { FormData } from "./Form";

type userFormProps = FormData & {
  updateInputs: (inputs: Partial<FormData>) => void;
};

export default function UserFormExample({
  name,
  surname,
  about_me,
  image,
  email,
  phone_number,
  updateInputs,
}: userFormProps) {
  const patternName = /^[ა-ჰ]{2,}$/;
  const nameIsValid = patternName.test(name);
  const surnameIsValid = patternName.test(surname);
  const descriptionIsValid = patternName.test(about_me);
  const patternEmail = /^[A-Za-z0-9._%+-]+@redberry.ge$/;
  const emailIsValid = patternEmail.test(email);
  const patternNumber = /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
  const numberIsValid = patternNumber.test(phone_number || "");

  const [inputBlurred, setInputBlurred] = useState(false);
  const [surnameInputBlurred, setSurnameInputBlurred] = useState(false);
  const [descriptionInputBlurred, setDescriptionInputBlurred] = useState(false);
  const [isNumberValidated, setIsNumberValidated] = useState(false);
  const [isEmailValidated, setIsEmailValidated] = useState(false);

  // const checkNumber = (e: any) => {
  //   const inputValue = e.target.value;
  //   const formattedValue = formatPhoneNumber(inputValue);
  //   updateInputs({ phone_number: formattedValue });
  // };

  // const formatPhoneNumber = (inputValue: string) => {
  //   const cleaned = inputValue.replace(/\D/g, "");
  //   const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})(\d{2})$/);
  //   if (match) {
  //     return `+995 ${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
  //   }
  //   return inputValue;
  // };
  // THESE SHOULD BE ADDED LATER


  


  return (
    <div>
      <div className="flex gap-x-14">
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="name"
            className="font-medium text-base leading-[21px]"
          >
            სახელი
          </label>

          <div className="flex items-center w-[371px]">
            <input
              required
              type="text"
              name="name"
              value={name}
              pattern="^[ა-ჰ]{2,}$"
              onChange={(e) => updateInputs({ name: e.target.value })}
              onBlur={() => setInputBlurred(true)}
              className={`min-w-[371px] h-12 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60 focus:outline-none relative z-0 ${
                inputBlurred && name && nameIsValid
                  ? "border-green"
                  : inputBlurred && name && "border-lightred"
              }`}
            />

            {inputBlurred && name && nameIsValid ? (
              <Check />
            ) : (
              inputBlurred && name && <WarningName />
            )}
          </div>

          <p className="font-light text-sm leading-[21px] text-textgray">
            მინიმუმ 2 ასო, ქართული ასოები
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="surname"
            className="font-medium text-base leading-[21px]"
          >
            გვარი
          </label>

          <div className="flex items-center">
            <input
              required
              type="text"
              name="surname"
              value={surname}
              pattern="^[ა-ჰ]{2,}$"
              onChange={(e) => updateInputs({ surname: e.target.value })}
              onBlur={() => setSurnameInputBlurred(true)}
              className={`min-w-[371px] h-12 border border-gray rounded py-13px px-4 leading-21px opacity-60 focus:outline-none relative z-0 ${
                surnameInputBlurred && surname && surnameIsValid
                  ? "border-green"
                  : surnameInputBlurred && surname && "border-lightred"
              }`}
            />
            {surnameInputBlurred && surname && surnameIsValid ? (
              <Check />
            ) : (
              surnameInputBlurred && surname && <Warning />
            )}
          </div>

          <p className="font-light text-sm leading-[21px] text-textgray">
            მინიმუმ 2 ასო, ქართული ასოები
          </p>
        </div>
      </div>

      <div className="flex gap-x-[19px] mt-[54px] items-center">
        <h3 className="font-medium text-lg leading-[22px]">
          პირადი ფოტოს ატვირთვა
        </h3>

        <label className="h-[27px] active:scale-[0.98]">
          <input
            required
            type="file"
            onChange={(e) => {
              updateInputs({ image: e.target?.files?.[0] || null });
            }}
            onLoad={() => {}}
            className="h-[27px] focus:outline-none"
          />
        </label>
      </div>

      <div className="pt-[49px] flex flex-col gap-y-2">
        <label htmlFor="_me">ჩემ შესახებ (არასავალდებულო)</label>
        <textarea
          name="about_me"
          placeholder="ზოგადი ინფო შენ შესახებ"
          value={about_me}
          onChange={(e) => updateInputs({ about_me: e.target.value })}
          onBlur={() => setDescriptionInputBlurred(true)}
          className={`w-798 h-103 border border-gray rounded py-[13px] px-4 leading-21px opacity-60 resize-none focus:outline-none ${
            descriptionInputBlurred && about_me && descriptionIsValid
              ? "border-green"
              : ""
          }`}
        ></textarea>
      </div>

      <div className="flex flex-col gap-y-2 pt-[33px]">
        <label htmlFor="email" className="font-medium text-base leading-[21px]">
          ელ.ფოსტა
        </label>

        <div className="flex items-center">
          <input
            required
            type="email"
            name="email"
            placeholder="anzorr666@redberry.ge"
            value={email}
            onBlur={() => {
              setIsEmailValidated(true);
            }}
            onChange={(e) => updateInputs({ email: e.target.value })}
            pattern="^[A-Za-z0-9._%+-]+@redberry.ge$"
            className={`w-798 h-12 border border-gray rounded py-[13px] px-4 leading-21px opacity-60 focus:outline-none ${
              isEmailValidated && email
                ? emailIsValid
                  ? "border-green"
                  : "border-lightred"
                : ""
            }`}
          />
          {isEmailValidated && email ? (
            emailIsValid ? (
              <Check />
            ) : (
              <Warning />
            )
          ) : null}
        </div>

        <p className="font-light text-sm leading-[21px] text-textgray">
          უნდა მთავრდებოდეს @redberry.ge-ით
        </p>
      </div>

      <div className="flex flex-col gap-y-2 pt-[29px]">
        <label
          htmlFor="phone_number"
          className="font-medium text-base leading-[21px]"
        >
          მობილურის ნომერი
        </label>

        <div className="flex items-center">
          <input
            required
            type="text"
            name="phone_number"
            value={phone_number || ""}
            onBlur={() => setIsNumberValidated(true)}
            placeholder="+995 551 12 34 56"
            pattern="^\+\d{3}\s\d{3}\s\d{2}\s\d{2}\s\d{2}$"
            className={`w-798 h-12 border border-gray rounded py-13px px-4 leading-21px opacity-60 focus:outline-none ${
              isNumberValidated && phone_number && numberIsValid
                ? "border-green"
                : isNumberValidated && phone_number && "border-lightred"
            }`}
          />
          {isNumberValidated && phone_number && numberIsValid ? (
            <Check />
          ) : (
            isNumberValidated && phone_number && <Warning />
          )}
        </div>

        <p className="font-light text-sm leading-[21px] text-textgray">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
      </div>
    </div>
  );
}
