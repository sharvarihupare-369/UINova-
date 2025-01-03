import React from "react";
import "../../styles/button.css";

type TextTransform =
  | "none"
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | "full-width"
  | "inherit"
  | "initial"
  | "unset";

type TextAlign = "center" | "left" | "right";

type ButtonProps = {
  label: string;
  color?: string;
  bgColor?: string;
  p?: string;
  m?: string;
  border?: string;
  borderRadius?: string;
  w?: string;
  h?: string;
  outline?: string;
  textTransform?: TextTransform;
  letterSpacing?: string;
  boxShadow?: string;
  cursor?: string;
  textAlign?: TextAlign;
  onClick?: () => void;
  variant?: string;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  color,
  bgColor,
  p,
  m,
  border,
  borderRadius,
  w,
  h,
  outline,
  textTransform,
  letterSpacing,
  boxShadow,
  cursor = "pointer",
  textAlign,
  variant = "primary",
  disabled = false,
  onClick
}) => {
  return (
    <div>
      <button
        style={{
          color: color,
          backgroundColor: variant === "outline" ? "" : bgColor,
          padding: p,
          margin: m,
          border: border,
          width: w,
          height: h,
          borderRadius: borderRadius,
          outline: outline,
          textTransform: textTransform,
          letterSpacing: letterSpacing,
          boxShadow: boxShadow,
          cursor: cursor,
          textAlign: textAlign,
        }}
        onClick={onClick}
        disabled={disabled}
        className={`button ${variant}`}
      >
        {label}
      </button>
    </div>
  );
};
