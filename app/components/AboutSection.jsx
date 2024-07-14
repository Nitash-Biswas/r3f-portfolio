"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><span class="text-2xl mr-2">Languages:</span>C++, C#, Python, JavaScript, Typescript</li>
        <li><span class="text-2xl mr-2">Web Dev:</span>React, Next.js, Three.js, Node.js</li>
        <li><span class="text-2xl mr-2">Game Dev:</span>Unity, Unreal Engine</li>
        <li><span class="text-2xl mr-2">Design:</span>Adobe Suite, Figma, Blender, DaVinci Resolve</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Netaji Subhas University of Technology,
          <br /> B.tech, 2021-2024
        </li>
        <li>
          Jain Bharati Mrigavati Vidyalaya, <br />
          12th, 2019
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white pt-24 sm:pt-36" id="about">
      <div className="md:h-screen md:grid md:grid-cols-2 gap-8 items-center py-8 px-4">
        {/* <Image
          src="/images/About.jpeg"
          alt="About image"
          width={500}
          height={500}
        /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-1/2">
          <h2 className="text-4xl font-bold text-white mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-base md:text-lg">
            I'm Nitash Biswas, a Computer Engineering student at NSUT. I'm
            passionate about coding, game development, illustration, and design.
            <br />
            With a knack for creativity and technology, I enjoy bringing ideas
            to life through interactive experiences. Whether it's writing code
            or creating captivating visuals, I strive to make a meaningful
            impact in the digital realm.
          </p>
          <div className="flex flex-row justify-start mt-6 pointer-events-auto">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
