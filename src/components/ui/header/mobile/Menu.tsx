import cn from "@/utils/cn";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import type { MobileMenu } from "@/interfaces/mobileMenu";
import { Github } from "lucide-react";

export default function MobileMenu({ isShowDialog, navItems }: MobileMenu) {
  return (
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
          className="z-[9999] bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-900 border-[1px] rounded-lg absolute right-[0] top-[60px] w-[270px] p-3 flex items-start gap-y-2 flex-col overflow-hidden"
        >
          {navItems.map((val: any, _i: any) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={
                  val.special
                    ? {
                        delay: _i * 0.05,
                        duration: 0.2,
                      }
                    : { delay: _i * 0.05 }
                }
                key={_i}
                className={
                  val.special === true
                    ? "w-full cursor-pointer flex items-center gap-x-2 rounded-lg rtl:bg-gradient-to-r ltr:bg-gradient-to-l from-[#B80023] to-[#b800a3] text-white p-3"
                    : "group cursor-pointer flex items-center gap-x-2 w-full hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200 p-3"
                }
              >
                {val.icon}
                <h2
                  className={cn(
                    `font-[500] ${
                      val.special === true ? "text-white" : "text-black dark:text-white"
                    }`
                  )}
                >
                  {val.title}
                </h2>
              </motion.div>
            );
          })}
          <hr className="border-slate-300 dark:border-slate-600 w-full my-2"/>
          <motion.a initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} exit={{opacity: 0}} transition={{delay: 6 * 0.05}} className="bg-gradient-to-r from-[#080808] to-[#080808cd] dark:from-[#ffffff] dark:to-[#ffffff] p-3 rounded-lg w-full text-white flex dark:text-black items-cennter gap-x-2 justify-start font-[500]" href="https://github.com/ParsaProg/Health" target="_blank">
            <Github size={20} />
            GitHub
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
