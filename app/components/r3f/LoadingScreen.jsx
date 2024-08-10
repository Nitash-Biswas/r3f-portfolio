
import { useProgress } from "@react-three/drei";

import Image from "next/image";

const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  return (
    <div
    className={`flex items-center justify-center transition-opacity duration-4000 absolute inset-0 m-auto mx-10 ${
      started ? `opacity-0` : ""
    }`}
  >


      <div className="p-16 bg-orange-400 rounded-3xl text-center border-dashed border-8 border-black/15 transition-opacity duration-400">
        <h1 className="text-4xl text-black/50 sm:text-6xl">Get Ready !!!</h1>
        <Image
          src="/images/LoadingScreenCard.png"
          alt="Loading Image"
          width={400}
          height={400}
          loading="eager"
          className="h-auto w-auto mx-auto"
        />
        <button
          className="p-4 px-16 bg-black/40 text-white border-none font-bold text-4xl rounded-lg transition-colors duration-400 mt-2 disabled:bg-black/10 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-black/60"
          disabled={progress < 100}
          onClick={onStarted}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default LoadingScreen;
