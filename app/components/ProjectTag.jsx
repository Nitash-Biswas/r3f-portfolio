import React from "react";

const ProjectTag = ({ tag, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-orange-400"
    : "text-darktxt border-[#383a3b] hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-4 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
