import styles from "../style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "./MenuSildeAnim";

const MenuCurve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const curveSlide = {
    initial: {
      x: "calc(100%+100px)",
    },
    enter: {
      x: "0%",
      transition: {
        duration: 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      x: "calc(100%+100px)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.svg
      variants={curveSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.svgCurve}
    >
      <motion.path
        variants={pathAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </motion.svg>
  );
};

export default MenuCurve;
