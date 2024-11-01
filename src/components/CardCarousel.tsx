"use client";

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

import img1 from "@/imgs/ui.jpg";
import img2 from "@/imgs/web.jpg";
import img3 from "@/imgs/app.png";
import img4 from "@/imgs/grD.png";
import img5 from "@/imgs/marketing.png";
import img6 from "@/imgs/photo.png";
import img7 from "@/imgs/brand.png";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section id="carousel" className="bg-[#fff] my-44" ref={ref}>
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-2xl font-semibold">
            Everything.  <span className="text-[#FF3D00]">Yes, even that.</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description }: ItemType) => (
  <div className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl" style={{ width: CARD_WIDTH, height: CARD_HEIGHT, marginRight: MARGIN }}>
    <Image
      src={url}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="rounded-2xl"
    />
    <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
      <span className="text-xs font-semibold uppercase text-[#FF3D00]">
        {category}
      </span>
      <p className="my-2 text-3xl font-bold">{title}</p>
      <p className="text-lg text-slate-300">{description}</p>
    </div>
  </div>
);

export default CardCarousel;

type ItemType = {
  id: number;
  url: string | StaticImageData;
  category: string;
  title: string;
  description: string;
};

const items: ItemType[] = [
  {
    id: 1,
    url: img3,
    category: "Always in reach",
    title: "App Development",
    description:
      "We build mobile applications that engage users, simplify tasks, and amplify your brand’s presence in the digital world.",
  },
  {
    id: 2,
    url: img4,
    category: "Designs that speak volumes",
    title: "Graphic Design",
    description:
      "Our creative design solutions captivate your audience, convey your message, and make your brand unforgettable.",
  },
  {
    id: 3,
    url: img5,
    category: "Marketing",
    title: "Strategy that drives growth",
    description:
      "We tailor campaigns that resonate with your audience, from social media to search engines, making sure your message reaches far and wide.",
  },
  {
    id: 4,
    url: img2,
    category: "Your digital foundation",
    title: "Web Development",
    description:
      "From responsive websites to advanced web apps, we create a seamless online experience that brings your ideas to life.",
  },
  {
    id: 5,
    url: img1,
    category: "User-focused excellence",
    title: "UX/UI Design",
    description:
      "We ensure every digital interaction is smooth and enjoyable with user-centered design that puts your customers first.",
  },
  {
    id: 6,
    url: img6,
    category: "Capture the moment",
    title: "Photography & Video",
    description:
      "High-quality visuals to showcase your products, events, and brand, creating an authentic connection with your audience.",
  },
  {
    id: 7,
    url: img7,
    category: "A brand to remember",
    title: "Branding",
    description:
      "We craft distinct brand identities that leave a lasting impression, helping you stand out in a crowded marketplace.",
  },
];
