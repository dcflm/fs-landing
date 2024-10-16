
"use client";

import ParallaxStars from "./ParallaxStars";
import { motion } from "framer-motion";
import RunningLine from "./RunningLine";

const HeaderComponent = () => {
  return (
    <div id="header" className="relative w-full h-screen bg-white flex justify-center items-center overflow-hidden">
      {/* Параллакс звезды остаются на фоне */}
      <ParallaxStars />

      {/* Заголовок и логотип поверх звёзд */}
      <div className="absolute z-10 max-w-[1100px] w-full flex flex-col items-center px-4">
        {/* Заголовок с анимацией */}
        <motion.h1
          className="font-bold text-center"
          style={{
            fontFamily: "SF Pro Display, sans-serif",
            fontSize: "clamp(36px, 5vw, 90px)", // Адаптивный размер шрифта
            lineHeight: "clamp(40px, 5.5vw, 85px)", // Адаптивная высота строки
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Guiding you through the{" "}
          <span className="text-[#FF3D00]">stars</span> of digital success.
        </motion.h1>

        {/* Подзаголовок с анимацией */}
        <motion.h2
          className="mt-8 font-light text-center"
          style={{
            fontFamily: "SF Pro Display, sans-serif",
            fontSize: "clamp(20px, 4vw, 55.62px)", // Адаптивный размер шрифта
            lineHeight: "clamp(25px, 5vw, 50px)", // Адаптивная высота строки
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Unlock the <span className="text-[#FF3D00]">Full Spectrum</span> of
          Digital Excellence
        </motion.h2>
      </div>

      {/* Бегущая строка внутри HeaderComponent */}
      <div className="hidden md:block">
        {/* Скрываем строку на мобильных устройствах */}
        <RunningLine />
      </div>
    </div>
  );
};

export default HeaderComponent;

