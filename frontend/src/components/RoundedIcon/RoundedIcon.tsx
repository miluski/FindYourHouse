import { MouseEventHandler } from "react";

export default function RoundedIcon({
  icon,
  className,
  onClick,
  iconColor = "text-white",
}: {
  icon: string;
  className?: string;
  onClick?: MouseEventHandler;
  iconColor?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`border border-dark  bg-dark rounded-circle p-3 position-relative ${className}`}
    >
      <i
        className={`${iconColor} bi ${icon} position-absolute top-50 start-50 translate-middle lh-1 d-flex align-items-center`}
      ></i>
    </div>
  );
}
