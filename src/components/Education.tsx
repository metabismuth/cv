import { ReactNode } from "react";
import Tag from "@/components/Tag";

export interface EducationProps {
  title: ReactNode;
  subtitle: ReactNode;
  date: ReactNode;
  bullets?: ReactNode[];
  tags?: ReactNode[];
}

export default function Education({ title, subtitle, date, bullets, tags }: EducationProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <div className="flex justify-between flex-wrap">
          <h3 className=" font-semibold">{title}</h3>
          <div className="opacity-50">{date}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm opacity-80">{subtitle}</div>
          {
            tags &&
            <div className="flex flex-wrap gap-2">
              {
                tags?.map((tag, i) => (
                  <div key={i}><Tag text={tag} /></div>
                ))
              }
            </div>
          }
        </div>
      </div>
      {
        bullets &&
        <ul className="ml-1 text-sm">
          {
            bullets?.map((bullet, i) => (
              <li key={i} className="list-item list-disc list-inside">{bullet}</li>
            ))
          }
        </ul>
      }
    </div>
  )
}
