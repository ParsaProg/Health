"use client";

import { ReactNode } from "react";
import { useStore } from "@/stores/userStore";

export default function FontHOCComponent({
  children,
}: {
  children: ReactNode;
}) {
  const { font } = useStore();

  return <div className={`${font}`}>{children}</div>;
}
