"use client";

import { ReactNode } from "react";
import { useStore } from "@/stores/userStore";

export default function FontHOCComponent({
  children,
}: {
  children: ReactNode;
}) {
  const { font } = useStore();

  return <div dir={font === "font-v"? "rtl": "ltr"} className={`${font}`}>{children}</div>;
}
