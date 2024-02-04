"use client";
import React from "react";
import { motion } from "framer-motion";

const BookNowBtn = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{type:"spring"}}
      className="text-sm hover:bg-color9 cursor-pointer hover:text-color1 font-semibold border flex justify-center items-center px-10"
    >
      BOOK NOW
    </motion.div>
  );
};

export default BookNowBtn;
