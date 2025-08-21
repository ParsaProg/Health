"use client";
import fa from "../langs/fa.json";
import en from "../langs/en.json";
import { useTheme } from "next-themes";

import { useStore } from "../stores/userStore";
export default function Home() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useStore();
  return (
    <div>
      <h1 className="text-red-600 text-2xl text-center mt-5">
        {lang === "fa" ? fa.title : en.title}
      </h1>
      <button
        onClick={() => {
          if (lang === "fa") {
            setLang("en");
          } else {
            setLang("fa");
          }

          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="flex justify-center items-center dark:bg-white bg-black shadow-xl shadow-[#0000003c] rounded-lg border-[1px] border-slate-200 p-5 cursor-pointer mx-auto"
      >
        {lang === "fa" ? fa.title : en.title}
      </button>
    </div>
  );
}
