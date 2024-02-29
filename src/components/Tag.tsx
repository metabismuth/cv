import { ReactNode } from "react";

export default function Tag({ text }: { text: ReactNode }) {
  return (
    <div className="text-xs bg-orange-400 text-white py-1 px-2 rounded-full">{text}</div>
  );
}
