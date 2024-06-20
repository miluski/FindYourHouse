import React from "react";
import Message from "./Message";
import "bootstrap/dist/css/bootstrap.min.css";

interface Message {
  id: number;
  content: string;
  type: "income" | "outcome";
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="d-flex flex-column p-3">
      {messages && messages.map((message) => (
        <Message key={message.id} text={message.content} type={message.type} />
      ))}
    </div>
  );
};

export default MessageList;
