import React from "react";
import { TargetAndTransition, motion } from "framer-motion";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const shake: TargetAndTransition = {
    y: [0, -5, 0, 5, 0],
    transition: {
      delay: 0.05,
      repeat: 3,
      duration: 0.1,
    },
  };

  return (
    <motion.div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
      transition={{ duration: 0.5 }}
      initial={{ y: 0, x: 0 }}
      animate={shake}
    >
      <strong className="font-bold">Error! </strong>
      <span className="block sm:inline">{message}</span>
    </motion.div>
  );
};
