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
          className="z-[9999] bg-white border-slate-300 border-[1px] rounded-lg absolute right-[0] top-14 w-[200px] p-5 flex items-start flex-col gap-y-4 overflow-hidden"
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
                    : "group cursor-pointer flex items-center gap-x-1 w-full mb-2"
                }
              >
                {val.icon}
                <h2
                  className={cn(
                    `font-[500] ${
                      val.special === true ? "text-white" : "text-black"
                    }`
                  )}
                >
                  {val.title}
                </h2>
              </motion.div>
            );
          })}
          <hr className="border-slate-200 w-full"/>
          <motion.a initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} exit={{opacity: 0}} transition={{delay: 6 * 0.05}} className="font-[600] bg-gradient-to-r from-[#080808] to-[#080808df] p-3 rounded-lg w-full text-white flex items-cennter gap-x-2 justify-start" href="https://github.com/ParsaProg/Health" target="_blank">
            <Github size={20} />
            GitHub
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
