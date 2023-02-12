import React, { FormEvent, useEffect, useState } from "react";
import Header from "./Header";
import useMultistepForm from "./useMultistepForm";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import FormWrapper from "./FormWrapper";
import Preview from "./Preview";
import axios from "axios";

export interface Experiences {
  position: string;
  employer: string;
  start_date: string;
  due_date: string;
  description: string;
}

export interface Degree {
  id: number;
  title: string;
}

export interface Educations {
  institute: string;
  degree: number;
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
      degree: 0,
      due_date: "",
      description: "",
    },
  ],
  image: null,
  about_me: "",
};

export default function Form() {
  const [data, setData] = useState(USER_DATA);

  const storedData = JSON.parse(sessionStorage.getItem("data")!);

  useEffect(() => {
    if (storedData) {
      setData(storedData);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const [degrees, setDegrees] = useState<Degree[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      setDegrees(result.data);
      console.log("data from GET: ", degrees);
    };
    fetchData();
  }, []);

  function readFile(
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (result: string) => void
  ) {
    const file = e.target?.files?.[0] || null;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        callback(reader.result);
        const updatedData = {
          ...storedData,
          image: reader.result,
        };
        setData(updatedData);
        sessionStorage.setItem("data", JSON.stringify(updatedData));
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function updateInputs(inputs: Partial<FormData>) {
    setData((prevData) => {
      return { ...prevData, ...inputs };
    });
  }

  const resetData = () => {
    sessionStorage.removeItem("data");
    setData(USER_DATA);
  };

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

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PersonalForm
        {...data}
        updateInputs={updateInputs}
        readFile={readFile}
      />,
      <ExperienceForm {...data} updateInputs={updateExperiences} />,
      <EducationForm
        {...data}
        updateInputs={updateEducations}
        degrees={degrees}
      />,
    ]);

  const navigate = useNavigate();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    postData();
  }

  function postData() {
    function dataURLtoFile(dataurl: any, filename: any) {
      if (data.image !== null) {
        var arr = dataurl.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
      }
    }

    const file =
      typeof data.image === "string"
        ? dataURLtoFile(data.image, "image.jpg")
        : data.image;

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append(
      "phone_number",
      data.phone_number?.replace(/\s/g, "") || ""
    );

    data.experiences.forEach((experience, index) => {
      formData.append(`experiences[${index}][position]`, experience.position);
      formData.append(`experiences[${index}][employer]`, experience.employer);
      formData.append(
        `experiences[${index}][start_date]`,
        experience.start_date
      );
      formData.append(`experiences[${index}][due_date]`, experience.due_date);
      formData.append(
        `experiences[${index}][description]`,
        experience.description
      );
    });

    data.educations.forEach((education, index) => {
      formData.append(`educations[${index}][institute]`, education.institute);
      formData.append(
        `educations[${index}][degree_id]`,
        education.degree.toString()
      );
      formData.append(`educations[${index}][due_date]`, education.due_date);
      formData.append(
        `educations[${index}][description]`,
        education.description
      );
    });

    formData.append("image", file || "");
    formData.append("about_me", data.about_me);
    console.log({ ...formData });
    axios
      .post("https://resume.redberryinternship.ge/api/cvs", formData)
      .then((res) => {
        sessionStorage.removeItem("data");
        setData(USER_DATA);
        navigate("/lastpage", { state: { data: data, degrees: degrees } });
        console.log(res);
      })
      .catch((err) => console.log(err));
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
              data={data}
              onClick={resetData}
              heading={
                !isLastStep
                  ? !isFirstStep
                    ? "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"
                    : "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"
                  : "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"
              }
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