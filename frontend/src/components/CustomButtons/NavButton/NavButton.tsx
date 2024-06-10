import { MouseEventHandler } from "react";

export default function NavButton({
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  currentPage,
  hovered,
  className,
  borderColor = "border-black",
  borderWidth = "border-2",
  fontSize = "fs-7",
}: {
  onClick: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  children: string;
  currentPage?: boolean;
  hovered?: boolean;
  className?: string;
  borderColor?: string;
  borderWidth?: string;
  fontSize?: string;
}) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type="button"
      className={`bg-transparent border-0 border-bottom ${borderWidth} fw-semibold  nav-button ${fontSize} p-3  ${currentPage || hovered ? borderColor : "border-transparent"} ${className}`}
    >
      {children}
    </button>
  );
}
