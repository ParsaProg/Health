"use client";

import {
  AlignJustify,
  FilePlay,
  FileText,
  Heart,
  Rss,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItemClassName } from "@/constants/navItems";
import cn from "@/utils/cn";
import { useState } from "react";

export default function Header() {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
  const navItems = [
    {
      title: "Articles",
      icon: <FileText size={18} className={navItemClassName} />,
      route: "articles",
      special: false,
    },
    {
      title: "Videos",
      icon: <FilePlay size={18} className={navItemClassName} />,
      route: "videos",
      special: false,
    },
    {
      title: "Health News",
      icon: <Rss size={18} className={navItemClassName} />,
      route: "health-news",
      special: false,
    },
    {
      title: "Ergonomic Tips",
      icon: <Target size={18} className={navItemClassName} />,
      route: "ergonomic-tips",
      special: false,
    },
    {
      title: "Get Started",
      icon: <Sparkles size={18} />,
      route: "login",
      special: true,
    },
  ];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-[9999] fixed top-0 w-[100%] flex justify-center mt-4 pb-4 shadow-lg shadow-[#5555552c]"
      >
        <div className="flex items-center justify-between w-[95%]">
          <motion.div
            initial={{ opacity: 0, y: -100, bottom: -10 }}
            animate={{ opacity: 1, y: 0, bottom: 10 }}
            exit={{
              opacity: 0,
              y: -100,
              bottom: -10,
            }}
            transition={{ delay: 0.4 }}
            className="w-[200px] flex items-center justify-between"
          >
            <section className="relative text-[#B80023] flex items-center gap-x-2">
              <Heart size={40} />
              <div className="absolute top-1 left-6 w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#B80023] to-[#9600b8]">
                  Health
                </h1>
                <h1 className="font-light text-slate-600 text-sm">
                  Next-Gen Wellness
                </h1>
              </div>
            </section>
            <section></section>
          </motion.div>
          <div className="nav-items  items-center gap-x-10 hidden [@media(min-width:1030px)]:flex">
            {navItems.map((val, _i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: -100, bottom: -10 }}
                  animate={{ opacity: 1, y: 0, bottom: 10 }}
                  exit={{
                    opacity: 0,
                    y: -100,
                    bottom: -10,
                  }}
                  whileHover={
                    val.special
                      ? { scale: 1.1, transition: { delay: 0, duration: 0.2 } }
                      : {}
                  }
                  transition={{ delay: _i * 0.3 }}
                  key={_i}
                  className={
                    val.special === true
                      ? " cursor-pointer flex items-center gap-x-2 rounded-lg rtl:bg-gradient-to-r ltr:bg-gradient-to-l from-[#B80023] to-[#b800a3] text-white p-3"
                      : "group cursor-pointer flex items-center gap-x-1"
                  }
                >
                  {val.icon}
                  <h2
                    className={cn(
                      `font-[500] ${
                        val.special === true ? "text-white" : "text-slate-600"
                      }`
                    )}
                  >
                    {val.title}
                  </h2>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsShowDialog(!isShowDialog)}
            className="relative cursor-pointer hidden [@media(max-width:1030px)]:flex p-3 rounded-lg border-[1px] border-slate-300"
          >
            <AnimatePresence>
              {isShowDialog && (
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="top-[70px] right-0 w-full h-[100vh] fixed z-[998] bg-white/30 backdrop-blur-[2px]"
                />
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {isShowDialog ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 60 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{
                    opacity: 0,
                    rotate: 60,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 60 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{
                    opacity: 0,
                    rotate: 60,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <AlignJustify size={20} />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isShowDialog && (
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
                  {navItems.map((val, _i) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
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
                          val.special === true
                            ? "w-full cursor-pointer flex items-center gap-x-2 rounded-lg rtl:bg-gradient-to-r ltr:bg-gradient-to-l from-[#B80023] to-[#b800a3] text-white p-3"
                            : "group cursor-pointer flex items-center gap-x-1 w-full"
                        }
                      >
                        {val.icon}
                        <h2
                          className={cn(
                            `font-[500] ${
                              val.special === true
                                ? "text-white"
                                : "text-slate-600"
                            }`
                          )}
                        >
                          {val.title}
                        </h2>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
