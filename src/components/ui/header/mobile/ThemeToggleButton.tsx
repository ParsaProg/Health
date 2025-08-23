"use client";

import cn from "@/utils/cn";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle({ isShowThemeDialog }: any) {
  const { theme, setTheme } = useTheme();
  const themeItems = [
    {
      title: "Dark",
      icon: <Moon size={20} className="text-slate-600 dark:text-slate-400"/>,
      theme: "dark",
    },
    {
      title: "Light",
      icon: <Sun size={20} className="text-slate-600 dark:text-slate-400"/>,
      theme: "light",
    },
    {
      title: "System",
      icon: <Monitor size={18} className="text-slate-600 dark:text-slate-400"/>,
      theme: "system",
    },
  ];
  useEffect(() => {});
  const [themeMode, setThemeMode] = useState<string>("");

  useEffect(() => {
    const theme = localStorage.getItem("theme")?.toString();
    setThemeMode(theme as string);
  }, []);
  return (
    <div className="transition-colors duration-200 cursor-pointer focus:scale-[0.9]
    relative rounded-lg py-3 px-3 flex justify-center
    hover:bg-slate-200 dark:hover:bg-slate-800">
      <AnimatePresence mode="wait">
        {themeMode === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 60, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            exit={{
              opacity: 0,
              rotate: 60,
              scale: 0.9,
              transition: { duration: 0.4 },
            }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={20} />
          </motion.div>
        ) : themeMode === "light" ? (
          <motion.div
            key="light"
            initial={{ opacity: 0, rotate: 60, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            exit={{
              opacity: 0,
              rotate: 60,
              scale: 0.9,
              transition: { duration: 0.4 },
            }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="system"
            initial={{ opacity: 0, rotate: 60, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            exit={{
              opacity: 0,
              rotate: 60,
              scale: 0.9,
              transition: { duration: 0.4 },
            }}
            transition={{ duration: 0.2 }}
          >
            <Monitor size={19} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isShowThemeDialog && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -50,
              scale: 0.8,
            }}
            className="z-[9999] bg-white dark:bg-gray-950 dark:text-white border-slate-300 dark:border-slate-900 border-[1px] rounded-lg absolute right-[0] top-[60px] w-[170px] py-2 p-2 flex items-start flex-col  overflow-hidden"
          >
            {themeItems.map((val: any, _i: any) => {
              return (
                <motion.div
                  onClick={() => {
                    setTheme(val.theme);
                    setThemeMode(val.theme);
                  }}
                  initial={{ opacity: 0, y: _i * -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                  }}
                  whileHover={
                    val.special
                      ? {
                          scale: 1.1,
                          transition: { delay: 0, duration: 0.2 },
                        }
                      : {}
                  }
                  transition={{ delay: _i * 0.03 }}
                  key={_i}
                  className={`${
                    theme === val.theme.toLowerCase() && "bg-[#0040ff25] dark:bg-[#0059ff21]"
                  } group text-sm cursor-pointer text-black dark:text-white flex rounded-md p-3 items-center gap-x-3 w-full justify-between`}
                >
                  <div className="flex items-center gap-x-2">
                    {val.icon}
                    <h2 className={cn(`font-[500]`)}>{val.title}</h2>
                  </div>
                  {theme === val.theme.toLowerCase() && <div className="rounded-full bg-blue-500 w-2 h-2"></div>}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
