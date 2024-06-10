import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface MessageProps {
  text: string;
  type: "income" | "outcome";
}

const SingleMessage: React.FC<MessageProps> = ({ text, type }) => {
  const alignmentClass = type === "income" ? "align-self-start" : "align-self-end";
  const backgroundClass = type === "income" ? "bg-warning" : "bg-light";
  return (
    <div className={`message ${alignmentClass} ${backgroundClass} p-2 rounded`}>
      {text}
    </div>
  );
};

export default SingleMessage;
