import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const formSection = document.getElementById("contact-form");

    if (formSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsFormVisible(entry.isIntersecting);
          });
        },
        { threshold: 0.5 } // Adjust threshold to control how much of the form needs to be in view
      );

      observer.observe(formSection);

      // Cleanup observer on component unmount
      return () => observer.unobserve(formSection);
    }
  }, []);

  const handleScrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      const offsetTop = formSection.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;
      const formHeight = formSection.offsetHeight;

      // Calculate position to scroll the form to the center
      const scrollToPosition = offsetTop - (windowHeight / 2) + (formHeight / 2);

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFormVisible ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed z-40 bottom-5 right-5 flex items-center justify-center"
      style={{ pointerEvents: isFormVisible ? "none" : "auto" }}
    >
      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: "#E63900",
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={handleScrollToForm} // Trigger smooth scroll on click
        className="relative z-10 bg-[#FF3D00] text-white font-semibold py-3 px-6 rounded-full shadow-lg"
        style={{
          fontFamily: "SF Pro Display, sans-serif",
        }}
      >
        New Project
      </motion.button>

      {/* Wave effect with smoother animation */}
      <motion.div
        className="absolute border-2 border-[#FF3D00]/30 rounded-full"
        style={{
          width: "160px",
          height: "60px",
          borderRadius: "9999px",
        }}
        animate={{
          scale: [1, 1.3],
          opacity: [1, 0],
        }}
        transition={{
          duration: 1.75,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default FloatingButton;

