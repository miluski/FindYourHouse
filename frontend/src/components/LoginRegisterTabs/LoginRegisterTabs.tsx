import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LoginForm from "../LoginForm/LoginForm.tsx";
import RegisterForm from "../RegisterForm/RegisterForm.tsx";
import { useState } from "react";

function UncontrolledExample() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab: string | null) => {
    if (tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Tab.Container
      defaultActiveKey="login"
      activeKey={activeTab}
      onSelect={handleTabChange}
    >
      <Nav
        className={
          "d-flex flex-row mt-4 border-bottom border-secondary-subtle "
        }
      >
        <Nav.Item
          className={
            "shadow-none border-0 border-bottom rounded-0 border-4  " +
            (activeTab === "login"
              ? "text-primary border-warning  "
              : " border-white")
          }
        >
          <Nav.Link
            className={"px-3 pb-3 no-transition text-black"}
            eventKey="login"
          >
            Zaloguj się
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          className={
            " shadow-none border-0 border-bottom  rounded-0  border-4 " +
            (activeTab === "register" ? "  border-warning  " : " border-white")
          }
        >
          <Nav.Link className={"px-3  pb-3 no-transition"} eventKey="register">
            Zarejestruj się
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="login">
          <LoginForm />
        </Tab.Pane>
        <Tab.Pane eventKey="register">
          <RegisterForm />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default UncontrolledExample;
