import { ReactNode } from "react";
import Tag from "./Tag";

export interface WorkExperienceProps {
  title: ReactNode;
  company: ReactNode;
  date: ReactNode;
  companyDesc: ReactNode;
  companyTags?: ReactNode[];
  techTags?: ReactNode[];
  bullets: ReactNode[];
}

export default function WorkExperience({ title, company, date, companyDesc, companyTags, bullets, techTags }: WorkExperienceProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <div className="flex justify-between flex-wrap">
          <h3 className=" font-semibold">{title} @ {company}</h3>
          <div className="opacity-50">{date}</div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div>
            <div className="text-sm opacity-80">{companyDesc}</div>
            {companyTags && <div className="text-sm opacity-50">{companyTags?.join(" • ")}</div>}
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {
              techTags?.map((tech, i) => (
                <div key={i}><Tag text={tech} /></div>
              ))
            }
          </div>
        </div>
      </div>
      <ul className="ml-2 text-sm">
        {
          bullets.map((bullet, i) => (
            <li key={i} className="list-item list-disc list-inside">{bullet}</li>
          ))
        }
      </ul>
    </div>
  )
}
