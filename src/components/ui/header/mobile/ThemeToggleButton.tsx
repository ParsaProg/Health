"use client";

import cn from "@/utils/cn";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle({ isShowThemeDialog }: any) {
  const { setTheme } = useTheme();
  const themeItems = [
    {
      title: "Dark",
      icon: <Moon size={20} className="text-black" />,
      theme: "dark",
    },
    {
      title: "Light",
      icon: <Sun size={20} className="text-black" />,
      theme: "light",
    },
    {
      title: "System",
      icon: <Monitor size={18} className="text-black" />,
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
    <div className="hover:bg-slate-200 transition-colors duration-200 cursor-pointer focus:scale-[0.9] relative rounded-lg p-3 flex justify-center border-[1px] border-slate-300">
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
            className="z-[9999] bg-white border-slate-300 border-[1px] rounded-lg absolute right-[0] top-14 w-[200px] p-5 flex items-start flex-col gap-y-6 overflow-hidden"
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
                  transition={{ delay: _i * 0.1 }}
                  key={_i}
                  className={
                    "group cursor-pointer flex items-center gap-x-3 w-full"
                  }
                >
                  {val.icon}
                  <h2 className={cn(`font-[500] ${"text-black"}`)}>
                    {val.title}
                  </h2>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
