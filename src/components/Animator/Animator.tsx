import { motion } from "framer-motion";
import React from "react";


const Animator = (Component: React.ComponentType) => {
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
};


export default Animator;
