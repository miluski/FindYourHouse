function HelpAndContactList() {
  return (
    <ul className="list-unstyled mb-0">
      <li>
        <a className="dropdown-item" href="#">
          <p className="fs-6 d-flex align-items-center">
            <i className="bi bi-telephone-fill me-3 fs-2"></i> 12 345 67 89
          </p>
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <p className="fs-6 d-flex align-items-center">
            <i className="bi bi-envelope-at-fill me-3 fs-2"></i>
            findyourhouse@gmail.com
          </p>
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          <p className="fs-6 d-flex align-items-center mb-0">
            <i className="bi bi-whatsapp me-3 fs-2"></i>
            WhatsApp
          </p>
        </a>
      </li>
    </ul>
  );
}

export default HelpAndContactList;
