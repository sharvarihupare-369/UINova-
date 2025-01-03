import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../Button/Button";
import "../../styles/modal/basicmodal.css";

type TextAlign = "left" | "center" | "right";

type HorizontalPosition = "center" | "left" | "right";

type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "4xl";

type BasicModalProps = {
  title?: string;
  content?: string;
  size?: ModalSize;
  width?: string | number;
  height?: string | number;
  bodyColor?: string;
  textColor?: string;
  bg?: string;
  gradientColors?: string[];
  show?: boolean;
  iconsize?: number;
  closeModal?: () => void;
  textAlign?: TextAlign;
  overlayColor?: string;
  overlayOpacity?: number;
  closeOnOverlayClick?: boolean;
  buttonLabel?: string;
  position?: HorizontalPosition;
};

export const BasicModal: React.FC<BasicModalProps> = ({
  title = "Basic Modal Title",
  content = "Modal body goes here",
  size = "md",
  width = "30%",
  height = "auto",
  textColor,
  bodyColor,
  bg,
  gradientColors,
  show,
  iconsize = 30,
  closeModal,
  textAlign,
  buttonLabel = "Close",
  position = "center",
}) => {
  // const [isVisible, setIsVisible] = useState<boolean>(false);
  // if (!show) return null;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation to finish
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!isVisible) return null;
  const gradientStops =
    gradientColors &&
    gradientColors
      ?.reverse()
      ?.map(
        (color: string, index: number) =>
          `${color} ${(index / (gradientColors.length - 1)) * 100}%`
      );
  const dynamicGradient = `linear-gradient(to right, ${gradientStops?.join(
    ", "
  )})`;
  const getHorizontalPositionStyle = () => {
    switch (position) {
      case "left":
        return { justifyContent: "flex-start" };
      case "right":
        return { justifyContent: "flex-end" };
      default:
        return { justifyContent: "center" };
    }
  };
  const sizeMapping: Record<ModalSize, string> = {
    sm: "400px",
    md: "500px",
    lg: "700px",
    xl: "900px",
    "2xl": "1100px",
    "4xl": "1400px",
  };
  return (
    <div
      className={`modal_overlay ${show ? "fade-in" : "fade-out"}`}
      style={{
        display: "flex",
        alignItems: "center",
        ...getHorizontalPositionStyle(),
      }}
    >
      <div
        className={`modal_container ${show ? "slide-up" : "slide-down"}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          // width: typeof width === "number" ? `${width}px` : width,
          width: sizeMapping[size],
          height: typeof height === "number" ? `${height}px` : height,
          background:
            gradientColors && gradientColors.length ? dynamicGradient : bg,
        }}
      >
        <p className="close_icon_container" onClick={closeModal}>
          <IoClose size={iconsize} color="gray" />
        </p>
        <div>
          <p
            style={{ color: textColor, textAlign: textAlign }}
            className="title"
          >
            {title}
          </p>
        </div>
        <div
          style={{
            border: "1px solid rgb(215 217 222)",
            width: "100%",
            margin: "auto",
          }}
        ></div>
        <div>
          <p style={{ color: bodyColor }} className="body">
            {content}
          </p>
        </div>
        <div
          style={{
            border: "1px solid rgb(215 217 222)",
            width: "100%",
            margin: "auto",
          }}
        ></div>

        <div className="button_cont">
          <Button
            label={buttonLabel}
            variant="secondary"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
};
