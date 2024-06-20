import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export default function GuardView(props: { children: ReactElement }) {
	const token = localStorage.getItem("token");
	return token !== "" && token !== null ? (
		props.children
	) : (
		<Navigate to='/unathorized' />
	);
}
