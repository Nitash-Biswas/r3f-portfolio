import React from "react";
import NavLink from "./NavLink";

import { AnimatePresence, motion } from "framer-motion";
import { menuSlide, slide } from "./MenuSildeAnim";
import MenuCurve from "./MenuCurve";

//@ts-ignore
const MenuOverlay = ({ links }) => {
  return (
    <>
      <motion.div
        initial={{ backdropFilter: "blur(0px)"}}
        animate={{backdropFilter: "blur(5px)"}}
        exit={{  backdropFilter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="fixed h-full w-full z-20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0}}
        animate={{opacity: 0.5}}
        exit={{  opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed h-full w-full z-20 bg-black"
      ></motion.div>

      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex flex-col fixed py-4 h-full items-center justify-center right-0 top-0 w-[50vw] bg-[#1b1b1b] p-4 "
        style={{ zIndex: 30 }}
      >
        <MenuCurve />
        {/* @ts-ignore */}
        {links.map((link, index) => (
          <motion.li
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            key={index}
            className="list-none p-3"
          >
            <NavLink href={link.path} title={link.title} />
          </motion.li>
        ))}
      </motion.div>
    </>
  );
};

export default MenuOverlay;
