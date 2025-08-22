"use client";

import { ReactNode } from "react";
import { useStore } from "@/stores/userStore";

export default function FontHOCComponent({
  children,
}: {
  children: ReactNode;
}) {
  const { lang } = useStore();

  return (
    <div
      dir={lang === "fa" ? "rtl" : "ltr"}
      className={`${lang === "fa" ? "font-v" : "font-p"}`}
    >
      {children}
    </div>
  );
}
