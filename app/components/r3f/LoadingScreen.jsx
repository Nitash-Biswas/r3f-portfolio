import { useProgress } from "@react-three/drei";
import load from "./LoadingScreen.module.scss";
import Image from "next/image";

const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  return (
    <div className={`${load.loadingScreen} ${started ? `${load.loadingScreen__started}` : ""}`}>
      <div className={load.loadingScreen__progress}>
        <div
          className={load.loadingScreen__progress__value}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className={load.loadingScreen__board}>
        <h1 className={load.loadingScreen__title}>Get Ready !!!</h1>
        <Image
          src="/images/LoadingScreenCard.png"
          alt="About image"
          width={500}
          height={400}
        />
        <button
          className={load.loadingScreen__button}
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
