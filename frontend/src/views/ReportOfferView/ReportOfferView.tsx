import React, { useState } from "react";
import "./styles/ReportOfferViewStyles.css";
import HeaderView from "../../components/Header/Header";
import FooterView from "../../components/Footer/FooterView";
import { axiosInstance } from "../../utils/axiosInstance";

function ReportOfferView() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [emailError, setEmailError] = useState("");
  const [reasonError, setReasonError] = useState("");

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleReasonChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setReason(e.target.value);
    setReasonError("");
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Podaj poprawny adres email");
      return;
    }

    if (!validateReportReason(reason)) {
      setReasonError("Podaj powód zgłoszenia");
      return;
    }

    const reportObject = {
      email: email,
      reportReason: reason,
      offerId: "id-oferty",
    };

    sendReport(reportObject);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      typeof email === "string" &&
      email.length > 0 &&
      regex.test(email.toLowerCase())
    );
  };

  const validateReportReason = (reportReason: string | any[]) => {
    return typeof reportReason === "string" && reportReason.length > 0;
  };

  const sendReport = (reportObject: {
    email: any;
    reportReason: any;
    offerId: any;
  }) => {
    const { email, reportReason, offerId } = reportObject;
    axiosInstance
      .patch(`offers/${offerId}`, {
        email: email,
        reportReason: reportReason,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Raport został pomyślnie wysłany");
        } else {
          console.error("Błąd podczas wysyłania raportu");
        }
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania raportu:", error);
      });
  };

  return (
    <>
      <div className="mainReportView" data-testid="mainReportView">
      <HeaderView />
        <div>
          <h5>Znalazłeś fałszywą ofertę?</h5>
        </div>
        <div>
          Zgłoś ją tutaj. Wprowadź poniżej swój adres email, oraz podaj powód
          naruszenia zasad.
        </div>
        <div className="emailInputDiv">
          <div>Email:</div>
          <div>
            <input
              className="emailBox"
              type="text"
              placeholder={"example@gmail.com"}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className="errorMessage">{emailError}</div>}
          </div>
        </div>
        <div className="reasonInputDiv">
          <div>Powód zgłoszenia</div>
          <div>
            <textarea
              className="reasonBox"
              placeholder={"Opisz swój powód tutaj"}
              value={reason}
              onChange={handleReasonChange}
            ></textarea>
            {reasonError && <div className="errorMessage">{reasonError}</div>}
          </div>
        </div>
        <div>
          <button className="reportButton" onClick={handleSubmit} data-testid="zglos-button">
            Zgłoś
          </button>
        </div>
      </div>
      <FooterView />
    </>
  );
}

export default ReportOfferView;
