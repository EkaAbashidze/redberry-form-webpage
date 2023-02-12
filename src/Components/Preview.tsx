import IconPreview from "../assets/icon-preview.png";
import EmailIcon from "./Svg/EmailIcon";
import MobileIcon from "./Svg/MobileIcon";
import { FormData } from "./Form";
import { Degree } from "./Form";

export default function Preview({
  data,
  degrees,
}: {
  data: FormData;
  degrees: Degree[];
}) {
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

  return (
    <div className="pt-12 px-20 pb-11 flex flex-col justify-between h-[1080px] w-full">
      <div>
        <div className="flex justify-between ">
          <div className="mt-10">
            <div className="flex items-center gap-x-5 text-red font-bold text-4xl leading-10 mb-4">
              <h1>{data.name}</h1>
              <h1>{data.surname}</h1>
            </div>

            <div className="flex flex-col gap-y-2 mb-9">
              {!data.email ? null : (
                <div className="flex items-center gap-x-3 text-offblack">
                  <EmailIcon />
                  <p>{data.email}</p>
                </div>
              )}

              {!data.phone_number ? null : (
                <div className="flex items-center gap-x-3 text-offblack">
                  <MobileIcon />
                  <p>{data.phone_number}</p>
                </div>
              )}
            </div>

            {!data.about_me ? null : (
              <div>
                <h3 className="text-red font-bold text-[18px]">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h3>
                <p className="pt-4 pb-5 font-normal text-base leading-[22px]">
                  {data.about_me}
                </p>
                <div></div>
              </div>
            )}
          </div>

          <div className="h-[246px] min-w-[246px] max-w-[246px] rounded-full overflow-hidden	">
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
        </div>

        {data.experiences &&
          data.experiences.map((experience, idx) => {
            if (!experience.position && !experience.employer) {
              return null;
            }
            return (
              <div key={idx}>
                <h3 className="text-red font-bold text-[18px]">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h3>
                <div className="flex items-center gap-x-2 font-medium text-base leading-[20px] text-offblack pb-2 pt-4">
                  <p>
                    <b>{experience.position},</b>
                  </p>
                  <p>
                    <b>{experience.employer}</b>
                  </p>
                </div>
                <p className="text-[#919191] italic font-normal text-base leading-[19px]">
                  {experience.start_date} - {experience.due_date}
                </p>
                <p className="pt-4 pb-5 font-normal text-base leading-[22px]">
                  {experience.description}
                </p>
                <div></div>
              </div>
            );
          })}

        {data.educations &&
          data.educations.map((education, idx) => {
            if (!education.institute && !education.degree) {
              return null;
            }

            const degree = degrees.find(
              (degree) => degree.id === education.degree
            );

            return (
              <div key={idx}>
                <h3 className="text-red font-bold text-[18px]">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h3>
                <div className="flex items-center gap-x-2 font-medium text-base leading-[20px] text-offblack pb-2 pt-4">
                  <p>
                    <b>{education.institute}</b>
                  </p>
                  <p>
                    <b>{degree?.title}</b>
                  </p>
                </div>
                <p className="text-[#919191] italic font-normal text-base leading-[19px]">
                  {education.due_date}
                </p>
                <p className="pt-4 pb-5 font-normal text-base leading-[22px]">
                  {education.description}
                </p>
                <div></div>
              </div>
            );
          })}
      </div>
      <div>
        <img src={IconPreview} alt="" />
      </div>
    </div>
  );
}
