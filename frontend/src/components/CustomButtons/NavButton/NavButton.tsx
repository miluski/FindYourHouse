import { MouseEventHandler } from "react";

export default function NavButton({
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  currentPage,
  hovered,
}: {
  onClick: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  children: string;
  currentPage?: boolean;
  hovered?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type="button"
      className={`bg-transparent border-0 border-bottom border-2 fw-semibold nav-button fs-7 py-3 px-3  ${currentPage || hovered ? "border-black" : "border-transparent"}`}
    >
      {children}
    </button>
  );
}
