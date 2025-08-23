import { AnimatePresence, motion } from "framer-motion";
import { BackdropMobileHeader } from "../../../../interfaces/headerMobileBackdrop";

export default function BackdropFilter({
  isShowDialog,
  setIsShowDialog,
  isShowThemeDialog,
  setIsShowThemeDialog,
}: BackdropMobileHeader) {
  return (
    <AnimatePresence mode="wait">
      {isShowDialog || isShowThemeDialog ? (
        <motion.div
          onClick={() => {
            setIsShowDialog(false);
            setIsShowThemeDialog(false);
          }}
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            isShowDialog && "hidden"
          } [@media(max-width:1056)]:flex top-[80px] inset-0 h-[100vh] w-full fixed right-0 transition-all duration-200 ${
            isShowDialog && "backdrop-blur-[5px] dark:backdrop-blur-[10px]"
          }`}
        />
      ) : null}
    </AnimatePresence>
  );
}
