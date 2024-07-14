"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";
import styles from "../style.module.scss";
import { AnimatePresence } from "framer-motion";
import MenuCurve from "./MenuCurve";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  // {
  //   title: "Contact",
  //   path: "#contact",
  // },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3 pb-4 md:p-8 md:pb-4">
          <Link
            href={"#hero"}
            className="text-2xl md:text-5xl text-white hover:text-[#ADB7BE] font-semibold "
          >
            Nb.
          </Link>

          <div className="mobile-menu block md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="position-fixed right-0 top-10 border border-white flex  items-center justify-center rounded-full w-10 h-10"
            >
              <div
                className={`${styles.burger} ${
                  navbarOpen ? styles.burgerActive : ""
                } `}
              ></div>
            </button>
          </div>
          <div className="menu hidden md:block md:w-auto " id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="fixed h-[80px] md:h-[120px] z-20 top-0 w-full border-b-2" style={{ backdropFilter: "blur(10px)" , backgroundImage: "linear-gradient(to top, #d18b4505, #1b1b1b)" }}></div>
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBar;
