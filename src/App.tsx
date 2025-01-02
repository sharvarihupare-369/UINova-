import React, { useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import { CircularProgressBar } from "./components/ProgressBar/ProgressBarWithPercentage";
import { LinearProgressBar } from "./components/ProgressBar/LinearProgressBar";
import { BasicModal } from "./components/Modal/BasicModal";
const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  const gradientColors = [" #e6b3ff", " #ff99dd", " #d580ff"];
  return (
    <div>
      {/* <Button
        label="Click Me"  
        disabled={false}
        variant="secondary"
        cursor="pointer"
      /> */}
      {/* <CircularProgressBar
        gradientColors={gradientColors}
        percentage={progress}
        size={200}
        strokeWidth={12}
        strokeColor="red"
        strokeLinecap="round"
      /> */}
      {/* <LinearProgressBar
        gradientColors={gradientColors}
        percentage={progress}
        height={15}
        width={"100%"}
        barColor="red"
        trailColor="#ddd"
        animationDuration={0.1}
        isBubblePause={false}
        cursor={"pointer"}
        bubbleCount={15}
      /> */}
      <BasicModal/>
    </div>
  );
};

export default App;
