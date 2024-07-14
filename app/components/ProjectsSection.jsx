"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SenkoVerse AudioChat System",
    imgUrl: "/images/projects/Senko.png",
    description:
      "[ Internship ] A proximity-based audio chat system for implementation in online multiplayer platforms using Three.js, React, and WebRTC.",
    tag: ["All", "Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Jobs Daily",
    imgUrl: "/images/projects/JobsDaily.png",
    description:
      "App to search and apply for popular and nearby jobs. Built on React Native, for efficient cross-platform development, ensuring a seamless user experience on both iOS and Android. ",
    tag: ["All", "Dev"],
    gitUrl: "https://github.com/Nitash-Biswas/ReactNative_JobApp",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Asteroid Master",
    imgUrl: "/images/projects/Asteroid.png",
    description:
      "An Old Atari Classic Asteroid clone made using c++",
    tag: ["All", "Design"],
    gitUrl: "https://github.com/Nitash-Biswas/Asteroid-Master",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newSelectedTag) => {
    setTag(newSelectedTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className=" pt-24 sm:pt-44">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 pointer-events-auto">
        <ProjectTag
          tag={"All"}
          isSelected={tag === "All"}
          onClick={handleTagChange}
        />
        <ProjectTag
          tag={"Dev"}
          isSelected={tag === "Dev"}
          onClick={handleTagChange}
        />
        <ProjectTag
          tag={"Design"}
          isSelected={tag === "Design"}
          onClick={handleTagChange}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={project.id}
            transition={{ duration: 0.5, delay: 0.4 * project.id }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              imgUrl={project.imgUrl}
              description={project.description}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
