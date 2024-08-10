"use client";
import { Experience } from "./components/r3f/Experience";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader } from "@react-three/drei";
import { Perf } from "r3f-perf";
import HeroSection from "./components/HeroSection";
import styles from "./style.module.scss";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import NavBar from "./components/NavBar";
import { Suspense } from "react";
import LoadingScreen from "./components/r3f/LoadingScreen";
import { useState } from "react";

const keyboardMap = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "left", keys: ["KeyA", "ArrowLeft"] },
  { name: "right", keys: ["KeyD", "ArrowRight"] },
  { name: "run", keys: ["Shift"] },
];
export default function Home() {
  const [start, setStart] = useState(false);
  const appVisibility = start ? "visible" : "hidden";
  return (
    <>
      <main className="h-screen min-h-screen container w-screen overflow-x-hidden">
        <div className={`${appVisibility}`}>
          <NavBar />
          <div className="absolute w-full z-10 py-4 px-12 mt-20 md:mt-0 pointer-events-none">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
          </div>

          <div className="fixed w-full h-screen min-h-screen">
            <KeyboardControls map={keyboardMap}>
              <Canvas
                shadows
                camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
                style={{ touchAction: "none" }}
              >
                <Suspense fallback={null}>
                  {/* <Perf position="top-left" /> */}
                  <Experience />
                </Suspense>
              </Canvas>
            </KeyboardControls>
          </div>
        </div>
        <LoadingScreen started={start} onStarted={() => setStart(true)} />
      </main>
    </>
  );
}
