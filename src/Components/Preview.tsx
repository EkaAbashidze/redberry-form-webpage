import IconPreview from "../assets/icon-preview.png";
import EmailIcon from "./Svg/EmailIcon";
import MobileIcon from "./Svg/MobileIcon";
import { FormData } from "./Form";

export default function Preview({ data }: { data: FormData }) {
  const showImage = data.image ? URL.createObjectURL(data.image) : "";

  return (
    <div className="pt-12 px-20 pb-11 flex flex-col justify-between h-[1080px] w-full overflow-x-hidden">
      <div>
        <div className="flex justify-between ">
          <div className="mt-10">
            <div className="flex items-center gap-x-5 text-red font-bold text-4xl leading-10 mb-4 ">
              <h1>{data.name}</h1>
              <h1>{data.surname}</h1>
            </div>

            <div className="flex flex-col gap-y-2 mb-9">
              <div className="flex items-center gap-x-3 text-offblack">
                <EmailIcon />
                <p>{data.email}</p>
              </div>

              <div className="flex items-center gap-x-3 text-offblack">
                <MobileIcon />
                <p>{data.phone_number}</p>
              </div>
            </div>

            <div>
              <h3 className="text-red font-bold text-[18px]">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h3>
              <p className="pt-4 pb-5 font-normal text-base leading-[22px]">
                {data.about_me}
              </p>
              <div></div>
            </div>
          </div>

          <div className="h-[246px] min-w-[246px] max-w-[246px] rounded-full overflow-hidden	">
            <img
              src={showImage}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div>
          <h3 className="text-red font-bold text-[18px]">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h3>

          <div className="flex items-center gap-x-2 font-medium text-base leading-[20px] text-offblack pb-2 pt-4">
            <p>
              <b>{data.experiences[data.experiences.length - 1].position},</b>
            </p>

            <p>
              <b>{data.experiences[data.experiences.length - 1].employer}</b>
            </p>
          </div>

          <p className="text-[#919191] italic font-normal text-base leading-[19px]">
            {data.experiences[data.experiences.length - 1].start_date} -
            {data.experiences[data.experiences.length - 1].due_date}
          </p>
          <p className="pt-4 pb-5 font-normal text-base leading-[22px]">
            {data.experiences[data.experiences.length - 1].description}
          </p>
          <div></div>
        </div>

        <div>
          <h3 className="text-red font-bold text-[18px]">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h3>

          <div className="flex items-center gap-x-2 font-medium text-base leading-[20px] text-offblack pb-2 pt-4">
            <p>
              <b>{data.educations[data.educations.length - 1].institute},</b>
            </p>
            <p>
              <b>{data.educations[data.educations.length - 1].degree}</b>
            </p>
          </div>

          <p className="text-[#919191] italic font-normal text-base leading-[19px]">
            {data.educations[data.educations.length - 1].due_date}
          </p>
          <p className="pt-4 pb-5 font-normal text-base leading-[22px]">
            {data.educations[data.educations.length - 1].description}
          </p>
        </div>
      </div>
      <div>
        <img src={IconPreview} alt="" />
      </div>
    </div>
  );
}
