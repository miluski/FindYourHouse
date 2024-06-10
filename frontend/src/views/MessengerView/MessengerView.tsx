import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import ChatView from "./ChatView";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import HeaderView from "../../components/Header/HeaderView";

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

const usersData: User[] = [
  {id: 1,name: "Adam",email: "a.dam@spadam.pl",messages: [
      {id: 1,text: "Cześć chciałem zapytać o to mieszkanie. Ogłoszenie aktualne?",type: "income",},
      { id: 2, text: "Cześć. aktualne", type: "outcome" },
      { id: 3, text: "Spoko. To podjade jutro zobaczyć", type: "income" },
      { id: 4, text: "Git.", type: "outcome" },],},
  { id: 2, name: "Michał", email: "m.michał@michał.pl", messages: [
    { id: 1, text: "Cześć. aktualne", type: "outcome" },
    { id: 2, text: "Spoko. To podjade jutro zobaczyć", type: "income" },] },
  { id: 3, name: "Konrad", email: "konrad@mail.pl", messages: [] },
  { id: 4, name: "Zbyszek", email: "zbigniew@mail.pl", messages: [] },
];

const MessengerView: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <>
      <HeaderView />
      <Container className="fluid vh-100">
          <div className="row h-75">
            <div className="col-3 border-end">
              <LeftSideBar users={usersData} onSelectUser={setSelectedUser} />
            </div>
            <div className="col-9 ">
              {selectedUser && <ChatView user={selectedUser} />}
            </div>
          </div>
      </Container>
    </>
  );
};

export default MessengerView;
