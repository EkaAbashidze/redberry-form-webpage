import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Arrow from "./Svg/Arrow";

export default function EducationForm() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="institute"
            className="font-medium text-base leading-[21px]"
          >
            სასწავლებელი
          </label>
          <input
            required
            type="text"
            name="institute"
            value="სასწავლებელი"
            placeholder="სასწავლებელი"
            className="w-798 h-12 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60"
          />
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
            value="ხარისხი"
            placeholder="აირჩიეთ ხარისხი"
            className="w-[371px] h-12 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60"
          >
            <option disabled selected hidden value="">
              აირჩიეთ ხარისხი
            </option>
            <option value="საშუალო სკოლა">საშუალო სკოლის დიპლომი</option>
            <option value="ზოგადი განათლება">
              ზოგადსაგანმანათლებლო დიპლომი
            </option>
            <option value="ბაკალავრი">ბაკალავრი</option>
            <option value="მაგისტრი">მაგისტრი</option>
            <option value="დოქტორი">დოქტორი</option>
            <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
            <option value="სტუდენტი">სტუდენტი</option>
            <option value="კოლეჯი">კოლეჯი (ხარისხის გარეშე)</option>
            <option value="სხვა">სხვა</option>
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
            value="დამთავრების რიცხვი"
            className="w-[371px] h-12 border border-gray rounded py-3.5 px-4 leading-[21px] opacity-60"
          />
        </div>
      </div>

      <div className="pt-[33px] flex flex-col gap-y-2">
        <label htmlFor="description">აღწერა</label>
        <textarea
          name="description"
          value="აღწერა"
          placeholder="განათლების აღწერა"
          className="w-798 h-179 border border-gray rounded py-[13px] px-4 leading-[21px] opacity-60 resize-none"
        ></textarea>
      </div>
      <div className="w-798 h-px bg-[#C1C1C1] mt-[58px] mb-[45px]"></div>
      <button
        type="button"
        className="cursor-pointer bg-lightgrayblue text-white w-289 h-48 rounded flex justify-center items-center text-base leading-[20px]"
      >
        სხვა სასწავლებლის დამატება
      </button>
    </div>
  );
}
