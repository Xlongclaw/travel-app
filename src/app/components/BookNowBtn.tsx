"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BookNowBtn = ({ link }: { link: string }) => {
  return (
    <Link className="" href={"viewpackage/"+link}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring" }}
        className="text-sm py-4 hover:bg-color9 cursor-pointer hover:text-color1 font-semibold border flex justify-center items-center px-8"
      >
        BOOK NOW
      </motion.div>
    </Link>
  );
};

export default BookNowBtn;
