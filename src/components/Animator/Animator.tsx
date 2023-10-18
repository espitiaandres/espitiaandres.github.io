import { motion } from "framer-motion";
import React from "react";

export default function Animator(Component: React.ComponentType) {
  return (props: any) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Component {...props} />
    </motion.div>
  );
}
