import React from "react";
import "../../styles/linearprogressbar.css";
type LinearProgressBarProps = {
  percentage: number;
  height?: number;
  width?: string | number;
  barColor?: string;
  trailColor?: string;
  textColor?: string;
  animationDuration?: number;
  gradientColors?: Array<string>;
  isBubblePause?: boolean;
  cursor?: string;
  bubbleCount?: number;
};

export const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
  percentage,
  height = 10,
  width = "100%",
  barColor = "#4caf50",
  trailColor = "#e6e6e6",
  animationDuration = 0.5,
  gradientColors,
  isBubblePause = false,
  cursor = "pointer",
  bubbleCount = 5,
}) => {
  const gradientStops =
    gradientColors &&
    gradientColors
      ?.reverse()
      ?.map(
        (color, index) =>
          `${color} ${(index / (gradientColors.length - 1)) * percentage}%`
      );
  const dynamicGradient = `linear-gradient(to right, ${gradientStops?.join(
    ", "
  )})`;
  const bubbles = Array.from({ length: bubbleCount }, (_, index) => {
    return <div className="bubble" key={index} />;
  });
  return (
    <div
      className="linear-progress-bar-container"
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        backgroundColor: trailColor,
        borderRadius: height / 2,
        overflow: "hidden",
        height: `${height}px`,
        cursor: cursor,
      }}
    >
      <div
        className="linear-progress-bar"
        style={{
          width: `${percentage}%`,
          height: height,
          background:
            gradientColors && gradientColors?.length > 0
              ? dynamicGradient
              : barColor,
          transition: `width ${animationDuration}s ease`,
          borderRadius: height / 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className={`${isBubblePause ? "" : "bubbles"}`}>
          {!isBubblePause && bubbles}
        </div>
      </div>
    </div>
  );
};
