import Container from "react-bootstrap/Container";
import { MouseEventHandler, ReactNode } from "react";

export default function HeaderDropdown({
  visible,
  handleMouseEnter,
  handleMouseLeave,
  children,
}: {
  visible: boolean;
  handleMouseEnter: MouseEventHandler;
  handleMouseLeave: MouseEventHandler;
  children: ReactNode;
}) {
  if (!visible) {
    return null;
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={
        "d-none d-xl-block position-absolute rounded-bottom-4 start-0 top-100 w-100 bg-white border-bottom border-top py-4 z-3"
      }
    >
      <Container fluid={"xl"} className={"d-flex py-2"}>
        {children}
      </Container>
    </div>
  );
}

function List({
  children,
  paddingLeft,
  title,
  className,
}: {
  children: ReactNode;
  paddingLeft?: boolean;
  title: string;
  className?: string;
}) {
  return (
    <div
      style={paddingLeft ? {} : { paddingRight: "40px" }}
      className={className}
    >
      <h2 className={"fs-7 fw-bolder mb-3 text-nowrap"}>{title}</h2>
      <div className={"d-flex flex-column gap-2"}>{children}</div>
    </div>
  );
}

HeaderDropdown.List = List;
