import { MouseEventHandler } from "react";

export default function RoundedIcon({
  icon,
  className,
  onClick,
}: {
  icon: string;
  className?: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <div
      onClick={onClick}
      className={
        "border border-black  bg-black rounded-circle p-3 position-relative"
      }
    >
      <i
        className={`text-white bi ${icon} position-absolute top-50 start-50 translate-middle ${className}`}
      ></i>
    </div>
  );
}
