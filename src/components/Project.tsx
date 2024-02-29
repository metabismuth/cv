import { ReactNode } from "react";

export interface ProjectProps {
  title: ReactNode,
  date: ReactNode,
  description: ReactNode;
}

export default function Project({ title, date, description }: ProjectProps) {
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="text-sm opacity-50">{date}</div>
      </div>
      {
        description &&
        <div className="text-xs">{description}</div>
      }
    </div>
  );
}
