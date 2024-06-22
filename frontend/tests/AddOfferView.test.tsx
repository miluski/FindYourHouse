import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddOfferView } from "../src/views/AddOfferView/AddOfferView";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { OfferAction } from "../src/utils/types/Action";
import { MemoryRouter } from "react-router-dom";


const initialState = {
  offerReducer: {

	offerType: "Wynajem",
	propertyType: "Dom",
	title: "",
	price: 100,
	rent: 50,
	caution: 50,
	area: 10,
	roomCount: 1,
	photos: [],
	city: "",
	houseNumber: 1,
	street: "",
	apartmentNumber: 1,
	pricePerQuadraMeter: 0,
	description: "",
	exhibitorName: "",
	exhibitorSurname: "",
	exhibitorPhoneNumber: "",
	exhibitorEmail: "",
	isDataValid: false,
	actualSelectedOffer: {
		offerType: "",
		propertyType: "",
		title: "",
		price: 0,
		rent: 0,
		caution: 0,
		area: 0,
		roomCount: 0,
		photos: [],
		city: "",
		houseNumber: 0,
		street: "",
		apartmentNumber: 0,
		pricePerQuadraMeter: 0,
		description: "",
		exhibitorName: "",
		exhibitorSurname: "",
		exhibitorPhoneNumber: "",
		exhibitorEmail: "",
		isDataValid: false,
		canShow: false,
	},
}};
const rootReducer = (state = initialState, _action: OfferAction) => state;

const mockStore = legacy_createStore(rootReducer);

describe("AddOfferView", () => {
  test("renders the component", () => {
    render(
        <MemoryRouter>
        <Provider store={mockStore}>
            <AddOfferView />
        </Provider></MemoryRouter>
    );
    const chooseOfferTypeViewElement = screen.getByText("Wybierz typ oferty");
    expect(chooseOfferTypeViewElement).toBeInTheDocument();

    const chooseApartmentTypeElement = screen.getByText("Wybierz rodzaj nieruchomości");
    expect(chooseApartmentTypeElement).toBeInTheDocument();
  });

  test("displays add offer action button", () => {
    render(
        <MemoryRouter>
        <Provider store={mockStore}>
            <AddOfferView />
        </Provider></MemoryRouter>
    );
    const addOfferActionButtonElement = screen.getByTestId("addOfferActionButton");
    expect(addOfferActionButtonElement).toBeInTheDocument();
  });

});