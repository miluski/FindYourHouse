import { MouseEventHandler } from "react";

export default function LinkButton({
  text,

  onClick,
  className,
}: {
  text: string;

  onClick?: MouseEventHandler;
  className?: string;
}) {
  return (
    <a
      onClick={onClick}
      className={
        className +
        "  text-black link-offset-2 link-underline-warning link-underline-opacity-0 link-underline-opacity-100-hover cursor-pointer"
      }
    >
      {text}
    </a>
  );
}
