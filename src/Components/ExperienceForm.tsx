import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Arrow from "./Svg/Arrow";


export default function ExperienceForm() {


  return (
    <div>
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
                value="პოზიცია"

                pattern="^[ა-ჰA-Za-z]{2,}$"
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                className="w-798 h-12 border border-gray rounded py-13px px-4 leading-21px opacity-60 focus:outline-none"
              />
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
              value="დამსაქმებელი"
              pattern="^[ა-ჰA-Za-z]{2,}$"
              placeholder="დამსაქმებელი"
              className="w-798 h-12 border border-gray rounded py-13px px-4 leading-21px opacity-60 focus:outline-none"
            />

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
            value="დაწყების თარიღი"
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
            value="დამთავრების თარიღი"
            className="w-[371px] h-12 border border-gray rounded py-3.5 px-4 leading-[21px] opacity-60 focus:outline-none"
          />
        </div>
      </div>

      <div className="pt-[33px] flex flex-col gap-y-2">
        <label htmlFor="description">აღწერა</label>

        <textarea
          required
          name="description"
          value="აღწერა"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          className="w-798 h-123 border border-gray rounded py-[13px] px-4 leading-21px opacity-60 resize-none flex items-start focus:outline-none"
        ></textarea>
      </div>
      <div className="w-798 h-px bg-[#C1C1C1] mt-[58px] mb-[45px]"></div>
      <button
        type="button"
        className="cursor-pointer bg-lightgrayblue text-white w-289 h-48 rounded flex justify-center items-center text-base leading-[20px]"
      >
        მეტი გამოცდილების დამატება
      </button>
    </div>
  );
}
