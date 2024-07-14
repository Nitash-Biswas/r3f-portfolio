import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tags,
}) => {
  return (
    <div className="bg-[#201f1f] rounded-xl">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group pointer-events-auto"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute rounded-t-xl left-0 top-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={gitUrl} target="_blank"
            className="h-14 w-14 border-2 mr-3 relative rounded-full border-[#808487] hover:border-white group/link"
          >
            <CodeBracketIcon className="w-10 h-10 text-[#808487] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl} target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#808487] hover:border-white group/link"
          >
            <EyeIcon className="w-10 h-10 text-[#808487] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#808487]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
