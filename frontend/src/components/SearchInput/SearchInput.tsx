import RoundedIcon from "../RoundedIcon/RoundedIcon.tsx";
import React, { useRef, useState } from "react";
import "./SearchInput.css";
import { axiosInstance } from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function SearchInput({
  outline,
  id,
  offerType,
}: {
  outline?: boolean;
  id: string;
  offerType?: string;
}) {
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [visible, setVisible] = useState(false);

  const route = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setVisible(value.length > 0);
  };

  const clearInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setInputValue("");
    setVisible(false);
    setInputFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setInputFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }

    handleSearch();
  };

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get("/api/offers/search", {
        params: {
          query: inputValue,
          offerType: offerType,
        },
      });

      let page;

      if (offerType === "Sprzedaż") {
        page = "buyPage";
      }

      if (offerType === "Wynajem") {
        page = "rentPage";
      }

      localStorage.setItem("currentPageHeader", page as string);

      route("/filteredFlats", { state: { offers: response.data } });
    } catch (error) {
      console.error("Error fetching offers", error);
    }
  };

  return (
    <div
      className={`bg-white border border-3 border-transparent  rounded-5 w-100 h-100 `}
    >
      <div
        className={`d-flex rounded-5 w-100 h-100 ${inputFocused || outline ? (outline ? "searchInput__outlineSmaller" : "searchInput__outline") : ""}`}
      >
        <input
          id={id}
          aria-label={"Wprowadź dane wyszukiwania"}
          autoComplete={"off"}
          ref={inputRef}
          value={inputValue}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          onInput={handleInputChange}
          className="bg-transparent border-0 ps-4 w-100 searchInput__input my-auto"
          type="text"
          placeholder="Adres, Ulica, Miasto, Kod Poczotwy"
        />
        {visible && (
          <button
            type="button"
            className="bg-transparent p-0 border-0 mx-3 hover-opacity-75"
            onClick={clearInput}
            onMouseDown={(e) => {
              e.preventDefault();
              setInputFocused(true);
            }}
          >
            <i className="bi bi-x-lg fs-5 d-flex align-items-center"></i>
          </button>
        )}
        <button
          type="submit"
          className="bg-transparent rounded-circle p-1 border-0    hover-opacity-75 "
          onClick={handleSubmit}
          onMouseDown={(e) => {
            e.preventDefault();
            setInputFocused(true);
          }}
        >
          <RoundedIcon icon="bi-search fs-5" className="p-4" />
        </button>
      </div>
    </div>
  );
}
