"use client";
import { Experience } from "./components/r3f/Experience";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import HeroSection from "./components/HeroSection";
import styles from "./style.module.scss";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import NavBar from "./components/NavBar";

const keyboardMap = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "left", keys: ["KeyA", "ArrowLeft"] },
  { name: "right", keys: ["KeyD", "ArrowRight"] },
  { name: "run", keys: ["Shift"] },
];
export default function Home() {
  return (
    <main className="h-screen min-h-screen container w-screen">
      <NavBar />
      <div className="absolute w-full z-10 py-4 px-12 mt-20 md:mt-0 pointer-events-none">
        <HeroSection />
        <AboutSection />
        <ProjectsSection/>
      </div>
      <div className="fixed w-full h-screen min-h-screen">
        <KeyboardControls map={keyboardMap}>
          <Canvas
            shadows
            camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
            style={{ touchAction: "none" }}
          >
            {/* <Perf position="top-left" /> */}
            <Experience />
          </Canvas>
        </KeyboardControls>
      </div>
    </main>
  );
}
