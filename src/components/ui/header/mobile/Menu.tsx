import cn from "@/utils/cn";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { MobileMenu } from "@/interfaces/mobileMenu";

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
          className="z-[9999] bg-white border-slate-300 border-[1px] rounded-lg absolute right-[0] top-14 w-[200px] p-5 flex items-start flex-col gap-y-6 overflow-hidden"
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
                transition={{
                  delay: !val.special ? _i * 0.1 : 0,
                  duration: 0.2,
                }}
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
                      val.special === true ? "text-white" : "text-black"
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
  );
}
