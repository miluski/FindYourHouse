import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface User {
  id: number;
  name: string;
  email: string;
}

interface LeftSideBarProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ users, onSelectUser }) => {
  return (
    <>
      <div className="list-group">
        {users.map((user) => (
          <button
            key={user.id}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectUser(user)}
          >
            {user.name} ({user.email})
          </button>
        ))}
      </div>
    </>
  );
};

export default LeftSideBar;
