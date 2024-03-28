import Modal from "react-bootstrap/Modal";
import { CloseButton } from "react-bootstrap";
import "./LoginRegisterModal.css";
import LoginRegisterTabs from "../LoginRegisterTabs/LoginRegisterTabs.tsx";
import "../../utils/utils.css";

interface LoginRegisterModalProps {
  show: boolean;
  handleClose: () => void;
}

function LoginRegisterModal({ show, handleClose }: LoginRegisterModalProps) {
  return (
    <>
      <Modal
        fullscreen={"lg-down"}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={"disable-scrollabr"}
      >
        <Modal.Header className={"border-bottom-0"}>
          <CloseButton
            onClick={handleClose}
            data-bs-dismiss="modal"
            aria-label="Close"
            className=" shadow-none"
          />
        </Modal.Header>
        <Modal.Body className="d-flex flex-column pt-0 mt-4 mt-lg-0 form-container align-self-md-center align-self-lg-auto px-lg-4">
          <h4 className="align-self-center">Witaj w otodom</h4>
          <LoginRegisterTabs />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginRegisterModal;
