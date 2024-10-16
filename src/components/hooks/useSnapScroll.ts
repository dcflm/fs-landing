
import { useEffect } from "react";

const useSnapScroll = () => {
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (timer !== null) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        const sections = document.querySelectorAll(".snap-section");
        let closestSection = sections[0];
        let closestDistance = Math.abs(closestSection.getBoundingClientRect().top);

        sections.forEach((section) => {
          const distance = Math.abs(section.getBoundingClientRect().top);
          if (distance < closestDistance) {
            closestSection = section;
            closestDistance = distance;
          }
        });

        closestSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, []);
};

export default useSnapScroll;
