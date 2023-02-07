import React from "react";
import Check from "./Svg/Check";
import Warning from "./Svg/Warning";
import WarningName from "./Svg/WarningName";


export default function Personal() {
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
              value="სახელი"
              pattern="^[ა-ჰ]{2,}$"
            />
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
              value="გვარი"
              pattern="^[ა-ჰ]{2,}$"
            />
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
            className="h-[27px]"
          />
        </label>
      </div>

      <div className="pt-[49px] flex flex-col gap-y-2">
        <label htmlFor="_me">ჩემ შესახებ (არასავალდებულო)</label>
        <textarea
          name="about_me"
          placeholder="ზოგადი ინფო შენ შესახებ"
          value="ჩემ შესახებ"
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
            value="იმეილი"
            pattern="^[A-Za-z0-9._%+-]+@redberry.ge$"
          />
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
            value="ნომერი"
            placeholder="+995 551 12 34 56"
            pattern="^\+\d{3}\s\d{3}\s\d{2}\s\d{2}\s\d{2}$"
          />
        </div>

        <p className="font-light text-sm leading-[21px] text-textgray">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
      </div>
    </div>
  );
}
