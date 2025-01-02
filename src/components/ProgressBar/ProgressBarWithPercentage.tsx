import React from "react";

type StrokeLinecap = "default" | "round" | "square";

type PercentageProgressBarProps = {
  percentage: number;
  size?: number; // Size of the circle
  strokeWidth?: number; // Thickness of the progress circle
  strokeColor?: string; // Color of the progress circle
  trailColor?: string; // Background color of the progress circle
  textColor?: string; // Color of the percentage text
  strokeLinecap?: StrokeLinecap;
  gradientColors?: Array<string>;
};

export const CircularProgressBar: React.FC<PercentageProgressBarProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  strokeColor = "#4caf50",
  trailColor = "#e6e6e6",
  textColor = "gray",
  strokeLinecap = "default",
  gradientColors,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        <defs>
          <linearGradient
            id="gradientStroke"
            x1="0%"
            y1="25%"
            x2="90%"
            y2="80%"
          >
            {gradientColors &&
              gradientColors?.reverse()?.map((color: string, index: number) => {
                return (
                  <stop
                    offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                    style={{ stopColor: color, stopOpacity: 1 }}
                  />
                );
              })}
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trailColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={
            gradientColors && gradientColors.length
              ? "url(#gradientStroke)"
              : strokeColor
          }
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.3s ease",
            strokeLinecap: strokeLinecap === "default" ? "butt" : strokeLinecap,
          }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: size / 5,
          color: textColor,
          fontFamily: "sans-serif",
          fontWeight: 600,
          opacity: 0.6,
        }}
      >
        <p>{Math.round(percentage)}%</p>
      </div>
    </div>
  );
};
