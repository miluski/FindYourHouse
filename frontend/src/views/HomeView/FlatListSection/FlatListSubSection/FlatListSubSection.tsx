import { ReactNode } from "react";
import "./FlatListSubSection.css";

export default function FlatListSubSection({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle: string;
  children: ReactNode;
}) {
  return (
    <section className={"d-flex flex-column "}>
      <div className={"mb-3 px-2 p-xxl-0"}>
        <h2 className={"m-0 fw-bold fs-4"}>{title}</h2>
        <a className={"d-inline text-black"} href="#">
          {subTitle}
        </a>
      </div>
      <div className={"d-flex gap-3 justify-content-between sub-section py-2 "}>
        {children}
      </div>
    </section>
  );
}
