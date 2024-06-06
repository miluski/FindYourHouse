import React from "react";
import { Navigate } from "react-router-dom";

export default function Guard(props: { children: React.FC }) {
  const token = localStorage.getItem("token");
  return token !== null ? props.children : <Navigate to="/" />;
}
