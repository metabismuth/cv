import { ReactNode } from "react";
import Tag from "@/components/Tag";
import Link from "next/link";

export interface WorkExperienceProps {
  title: ReactNode;
  date: ReactNode;
  companyName: string;
  companyLink: string;
  companyIcon: string;
  companyDesc: ReactNode;
  companyTags?: ReactNode[];
  techTags?: ReactNode[];
  bullets: ReactNode[];
}

export default function WorkExperience({
  title,
  date,
  companyName,
  companyLink,
  companyIcon,
  companyDesc,
  companyTags,
  bullets,
  techTags
}: WorkExperienceProps) {

  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <div className="flex justify-between flex-wrap">
          <div className="flex gap-2 align-center">
            {/* <div> */}
            <img
              src={`./assets/companyIcons/${companyIcon}`}
              alt={companyName}
              className="inline-block h-4 my-auto"
            />
            <h3 className="font-semibold">
              <span>{title}</span>
              <span>{" @ "}</span>
              <Link href={companyLink} className="underline decoration-2">{companyName}</Link>
            </h3>
          </div>
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
  );
}
