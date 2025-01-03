import React, { useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import { CircularProgressBar } from "./components/ProgressBar/ProgressBarWithPercentage";
import { LinearProgressBar } from "./components/ProgressBar/LinearProgressBar";
import { BasicModal } from "./components/Modal/BasicModal";
const App = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState<boolean>(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
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
  const gradientColors = ["rgb(200, 105, 248)", "rgb(214, 49, 101)"];

  return (
    <div>
      {/* <button onClick={openModal}>Click ME</button> */}
      <Button onClick={openModal} label="Click Me" />
      {/* <Button
        label="Hello"  
        disabled={false}
        variant="outline"
        cursor="pointer"
      />
      <CircularProgressBar
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
      <BasicModal
        gradientColors={gradientColors}
        closeModal={closeModal}
        show={show}
        iconsize={25}
        size="md"
      />
    </div>
  );
};

export default App;
