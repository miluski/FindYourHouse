import React, { useState } from "react";
import MessageList from "./MessageList";
import "bootstrap/dist/css/bootstrap.min.css";

interface Message {
  id: number;
  text: string;
  type: "income" | "outcome";
}

interface User {
  id: number;
  name: string;
  email: string;
  messages: Message[];
}

interface ChatViewProps {
  user: User;
}

const ChatView: React.FC<ChatViewProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>(user.messages);

  return (
    <div className="d-flex flex-column h-100">
      <div className="flex-grow-1 overflow-auto">
        <MessageList messages={messages} />
      </div>
      <div className="p-3 border-top d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Example text"/>
        <button className="btn btn-primary">
          Wyślij
        </button>
      </div>
    </div>
  );
};

export default ChatView;
