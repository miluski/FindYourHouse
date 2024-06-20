import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { Picker } from "../src/components/Picker/Picker";
import { legacy_createStore } from "redux";
import { CHANGE_CALCULATED_CREDENTIALS } from "../src/utils/ActionTypes";
import { CalculatorAction } from "../src/utils/types/Action";

const initialState = {
  calculatorReducer: {
    propertyPrice: 100000,
    ownContribition: 5, 
    loanPeriod: 5,
    loanInterestRate: 5,
    monthlyInstallment: 1000,
    loanAmount: 50000,
    interest: 2000
  }
};

const rootReducer = (state = initialState, _action: CalculatorAction) => state;

const mockStore = legacy_createStore(rootReducer);

describe("Picker", () => {
  test("renders the component with correct label", () => {
    render(
      <Provider store={mockStore}>
        <Picker
          formLabel="Test Label"
          minRange={0}
          stepRange={1}
          maxRange={10}
          selectedValue={5}
          dispatchType={CHANGE_CALCULATED_CREDENTIALS}
          value="Test Value"
          minValue="Min Value"
          maxValue="Max Value"
        />
      </Provider>
    );

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  test("dispatches the correct action on range change", () => {
    const dispatchMock = jest.fn();
    jest.spyOn(mockStore, "dispatch").mockImplementation(dispatchMock);

    render(
      <Provider store={mockStore}>
        <Picker
          formLabel="Test Label"
          minRange={0}
          stepRange={1}
          maxRange={10}
          selectedValue={5}
          dispatchType={CHANGE_CALCULATED_CREDENTIALS}
          value="Test Value"
          minValue="Min Value"
          maxValue="Max Value"
        />
      </Provider>
    );

    const rangeInput = screen.getByRole("slider");
    fireEvent.change(rangeInput, { target: { value: "7" } });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: CHANGE_CALCULATED_CREDENTIALS,
      newSelectedValue: "7",
    });
  });
});