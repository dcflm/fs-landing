
"use client"

import React from "react";
import { motion } from "framer-motion";

const RunningLine = () => {
  return (
    <div
      className="w-[130%] h-[45px] bg-black text-white overflow-hidden absolute bottom-10 left-[-15%] z-20"
      style={{
        transform: "rotate(-5deg)", // Поворачиваем линию
        transformOrigin: "left bottom", // Точка вращения
      }}
    >
      <motion.div
        className="flex items-center whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 9, // Длительность анимации - можно отрегулировать для нужной скорости
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <span className="text-4xl mx-32">
          <span className="text-[#FF3D00]">01100110     </span> 01110011
        </span>
        <span className="text-4xl mx-32">
          un<span className="text-[#FF3D00]">10</span>ck the fu<span className="text-[#FF3D00]">11</span> spectrum* 0f digita
          <span className="text-[#FF3D00]">1</span> exce<span className="text-[#FF3D00]">11</span>ence.
        </span>
        <span className="text-4xl mx-32">
          <span className="text-[#FF3D00]">01100110     </span> 01110011
        </span>
      </motion.div>
    </div>
  );
};

export default RunningLine;

