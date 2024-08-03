import { useMotionValue,
   motion, 
  //  useSpring, useTransform 
  } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const AboutMe = () => {
  return (
    // <section className="bg-neutral-950 p-4 md:p-8">
      <div className="">
        <Link
          heading="Inventory Management"
          subheading="a web-based inventory management system using React with Redux Toolkit for the frontend, Spring Boot with Java for the backend, and Postgres for data storage."
          imgSrc="/imgs/random/11.jpg"
          href="#"
        />
        <Link
          heading="Attendance Portal"
          subheading="an attendance and leave management web application using a Spring Boot Kotlin backend and React frontend with PostgreSQL. The solution featured secure authentication, efficient API integration, and robust administrative controls for HR management."
          imgSrc="/imgs/random/6.jpg"
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="To make my digital Presence.here I have used React + TypeScript along With Framer for animations"
          imgSrc="/imgs/random/4.jpg"
          href="#"
        />
      </div>
    // </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // const mouseXSpring = useSpring(x);
  // const mouseYSpring = useSpring(y);

  // const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  // const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-voilet md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-voilet md:text-1xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className={`inline-block ${l === " " ? "whitespace-pre" : ""}`} // Add 'whitespace-pre' for spaces
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-white">
          {subheading}
        </span>
      </div>

      {/* <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      /> */}

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text text-voilet" />
      </motion.div>
    </motion.a>
  );
};