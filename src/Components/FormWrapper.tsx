import React from "react";
import { ReactNode } from "react";

type FormWrapperProps = {
  children: ReactNode[];
};

export default function FormWrapper({ children }: FormWrapperProps) {
  return (
    <div className="h-[1080px] bg-lightgray px-[150px] pt-[47px] pb-16 overflow-y-scroll">
      {children.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}