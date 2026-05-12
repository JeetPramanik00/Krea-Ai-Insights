import type { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="bg-[#4f6ef7] text-white text-xs px-2 py-0.5 rounded-full ml-2">
      {children}
    </span>
  );
}
