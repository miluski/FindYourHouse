import { MouseEventHandler, ReactNode } from "react";

export default function LinkButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
}) {
  return (
    <a
      onClick={onClick}
      className={
        className +
        "  text-black link-offset-3 link-underline-warning link-underline-opacity-0 link-underline-opacity-100-hover cursor-pointer"
      }
    >
      {children}
    </a>
  );
}
