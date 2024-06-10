import { MouseEventHandler, ReactNode } from "react";

export default function AccordionNavButton({
  onClick,
  children,
  buttonClassName,
  titleClassName,
}: {
  onClick: MouseEventHandler;
  children: ReactNode;
  buttonClassName?: string;
  titleClassName?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-0 border-0 bg-transparent w-100 ${buttonClassName}`}
    >
      <span className={`d-flex gap-3 align-items-center ${titleClassName}`}>
        {children}
      </span>
    </button>
  );
}
