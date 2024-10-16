
"use client"

import { useState, useEffect } from 'react';

const generateStars = () => {
  const exclusionZone = {
    top: 30, // верхняя граница зоны исключения (в процентах)
    bottom: 70, // нижняя граница зоны исключения (в процентах)
    left: 25, // левая граница зоны исключения (в процентах)
    right: 75 // правая граница зоны исключения (в процентах)
  };

  return Array.from({ length: 7 }).map((_, index) => {
    let top, left;

    // Генерируем позиции до тех пор, пока они не выйдут за пределы зоны исключения
    do {
      top = Math.random() * 100;
      left = Math.random() * 100;
    } while (
      top > exclusionZone.top &&
      top < exclusionZone.bottom &&
      left > exclusionZone.left &&
      left < exclusionZone.right
    );

    return {
      id: index,
      top: `${top}%`, // случайная позиция по вертикали
      left: `${left}%`, // случайная позиция по горизонтали
      size: `${Math.random() * 3 + 2}rem`, // случайный размер от 2rem до 5rem
      color: index % 2 === 0 ? '#000' : '#FF3D00', // чередуем цвета звёзд
      moveFactor: Math.random() * 20 + 10, // случайный коэффициент движения
      transform: 'translate(0px, 0px)',
      randomDirection: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 } // случайное направление движения
    };
  });
};

const ParallaxStars = () => {
  const [stars, setStars] = useState(generateStars());

  useEffect(() => {
    let mouseMoved = false;

    const handleMouseMove = (event: MouseEvent) => {
      mouseMoved = true;
      const newStars = stars.map((star) => {
        const starX = (window.innerWidth / 2 - event.clientX) / star.moveFactor;
        const starY = (window.innerHeight / 2 - event.clientY) / star.moveFactor;
        return {
          ...star,
          transform: `translate(${starX}px, ${starY}px)`,
        };
      });
      setStars(newStars);
    };

    const handleScroll = () => {
      mouseMoved = true;
      const newStars = stars.map((star) => {
        const starY = window.scrollY / star.moveFactor;
        return {
          ...star,
          transform: `translateY(${starY}px)`,
        };
      });
      setStars(newStars);
    };

    const randomMovement = () => {
      if (!mouseMoved) {
        const newStars = stars.map((star) => {
          const starX = Math.random() * 2 - 1; // случайное движение по оси X
          const starY = Math.random() * 2 - 1; // случайное движение по оси Y
          return {
            ...star,
            transform: `translate(${starX * star.moveFactor}px, ${starY * star.moveFactor}px)`,
          };
        });
        setStars(newStars);
      }
      mouseMoved = false; // сброс флага
    };

    // Запуск плавного случайного движения через каждые 1000 мс
    const interval = setInterval(randomMovement, 1000);

    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      clearInterval(interval); // очищаем интервал при размонтировании компонента
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stars]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white text-white">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            fontSize: star.size, // размер звезды
            color: star.color, // цвет звезды
            transform: star.transform, // движение звезды
            transition: "transform 1s ease-out", // плавный переход
          }}
        >
          *
        </div>
      ))}
    </div>
  );
};

export default ParallaxStars;

