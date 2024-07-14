"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-12 z-50 w-full h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 md:place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-5xl md:text-7xl font-extrabold">
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-600">
              Hi, I'm Nitash
            </span> */}

            <span className="text-white text-3xl">
              Hi, I'm Nitash
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially

                "A Web Developer",
                1000,
                "A Designer",
                1000,
                "An Illustrator",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="font-thin text-white text-xl mb-6 lg:text-2xl md:pr-40">
            Welcome to my portfolio . Hope you like it .
          </p>
          <div className="pointer-events-auto">
            <button className="px-1 py-1 w-[300px] rounded-full bg-orange-400 hover:bg-orange-500  text-white">
              <span className="block rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#dbdbdb] h-[250px] w-[250px] lg:h-[450px] lg:w-[450px] relative overflow-hidden">
            <Image
              src={"/public/images/hero.jpeg"}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-[500px]"
              width={250}
              height={250}
            />
          </div>
        </motion.div> */}
      </div>

  );
};

export default HeroSection;
