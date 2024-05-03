import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LoginForm from "../../views/LoginView/LoginForm.tsx";
import RegisterForm from "../../views/RegisterView/RegisterForm.tsx";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_OPERATION } from "../../utils/ActionTypes.ts";
import { OperationState } from "../../utils/types/State";

export default function LoginRegisterTabs() {
	const dispatch = useDispatch();
	const { operation } = useSelector((state: OperationState) => state.operationReducer);
	const handleTabChange = (tabName: string | null) => {
		localStorage.setItem("operation", tabName ?? "login");
		tabName
			? dispatch({ type: CHANGE_OPERATION, newOperation: tabName })
			: null;
	};
	return (
		<Tab.Container
			defaultActiveKey='login'
			activeKey={operation}
			onSelect={handleTabChange}>
			<Nav
				className={
					"d-flex flex-row mt-4 border-bottom border-secondary-subtle "
				}>
				<Nav.Item
					className={
						"shadow-none border-0 border-bottom rounded-0 border-4  " +
						(operation === "login"
							? "text-black border-warning  "
							: " border-white")
					}>
					<Nav.Link className={"px-3 pb-3 no-transition"} eventKey='login'>
						Zaloguj się
					</Nav.Link>
				</Nav.Item>
				<Nav.Item
					className={
						" shadow-none border-0 border-bottom  rounded-0  border-4 " +
						(operation === "register"
							? " text-black border-warning  "
							: " border-white")
					}>
					<Nav.Link className={"px-3  pb-3 no-transition"} eventKey='register'>
						Zarejestruj się
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<Tab.Content>
				<Tab.Pane eventKey='login'>
					<LoginForm />
				</Tab.Pane>
				<Tab.Pane eventKey='register'>
					<RegisterForm />
				</Tab.Pane>
			</Tab.Content>
		</Tab.Container>
	);
}
