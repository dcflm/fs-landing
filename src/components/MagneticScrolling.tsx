
"use client";

import React, { useEffect, useRef } from "react";

interface MagneticScrollingProps {
  children: React.ReactNode;
  sectionId: string;
}

const MagneticScrolling: React.FC<MagneticScrollingProps> = ({ children, sectionId }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger the snap effect when 50% of the section is visible
    });

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div ref={sectionRef} id={sectionId} className="my-0 py-0">
      {children}
    </div>
  );
};

export default MagneticScrolling;

