"use client";

import { FilePlay, FileText, Rss, Sparkles, Target } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItemClassName } from "@/constants/navItems";
import { useState } from "react";
import BackdropFilter from "./mobile/BackdropBlur";
import MobileMenu from "./mobile/Menu";
import MobileMenuButtonHeader from "./mobile/MenuButton";
import HeaderTitleIcon from "./desktop/HealthTitleIcon";
import ThemeToggle from "./mobile/ThemeToggleButton";
import NavItem from "./desktop/NavItem";

export default function Header() {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
  const [isShowThemeDialog, setIsShowThemeDialog] = useState<boolean>(false);
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
        key="header-motion"
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.7 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-md bg-[#ffffff5a] z-[9999] fixed top-0 w-[100%] flex justify-center pt-4 pb-4 shadow-lg shadow-[#5555552c]"
      >
        <div className="flex items-center justify-between w-[95%]">
          <HeaderTitleIcon />

          <div className="flex items-cener gap-x-3">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onClick={() => {
                setIsShowDialog(!isShowDialog);
                setIsShowThemeDialog(false);
              }}
              className="relative cursor-pointer hidden [@media(max-width:1050px)]:flex p-3 rounded-lg border-[1px] border-slate-300 "
            >
              <MobileMenuButtonHeader isShowDialog={isShowDialog} />

              <MobileMenu navItems={navItems} isShowDialog={isShowDialog} />
            </motion.div>

            <NavItem navItems={navItems} />
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onClick={() => {
                setIsShowDialog(false);
                setIsShowThemeDialog(!isShowThemeDialog);
              }}
              className="relative cursor-pointer"
            >
              <ThemeToggle
                isShowThemeDialog={isShowThemeDialog}
                setIsShowThemeDialog={setIsShowThemeDialog}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <BackdropFilter
        isShowDialog={isShowDialog}
        setIsShowDialog={setIsShowDialog}
        isShowThemeDialog={isShowThemeDialog}
        setIsShowThemeDialog={setIsShowThemeDialog}
      />
    </AnimatePresence>
  );
}
