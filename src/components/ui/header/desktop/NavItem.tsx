import cn from "@/utils/cn";
import { motion } from "framer-motion";

export default function NavItem({ navItems }: any) {
  return (
    <div className="nav-items  items-center gap-x-10 hidden [@media(min-width:1050px)]:flex">
      {navItems.map((val: any, _i: number) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: -100, bottom: -10 }}
            animate={{ opacity: 1, y: 0, bottom: 10 }}
            exit={{
              opacity: 0,
              y: -100,
              bottom: -10,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: val.special ? 0 : _i * 0.3, duration: 0.2 }}
            key={_i}
            className={
              val.special!! === true
                ? "cursor-pointer flex items-center gap-x-2 rounded-lg rtl:bg-gradient-to-r ltr:bg-gradient-to-l from-[#B80023] to-[#b800a3] text-white p-3"
                : "group cursor-pointer flex items-center gap-x-1"
            }
          >
            {val.icon}
            <h2
              className={cn(
                `font-[500] ${
                  val.special!! === true ? "text-white" : "text-black"
                }`
              )}
            >
              {val.title}
            </h2>
          </motion.div>
        );
      })}
    </div>
  );
}
