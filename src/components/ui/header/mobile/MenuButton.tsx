import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
export default function MobileMenuButtonHeader({
  isShowDialog,
}: {
  isShowDialog: boolean;
}) {
  return (
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
  );
}
