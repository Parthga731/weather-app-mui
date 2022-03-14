// import React from "react";

// import { SearchCountry } from "../components/SearchCountry";
// import { render, screen, fireEvent } from "./test-utils";

// const mockedUsedNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

// describe("Search country components test", () => {
//   it("title is present or not", async () => {
//     render(<SearchCountry />);
//     const sub = await screen.findByText(/weather app/i);
//     expect(sub).toBeInTheDocument();
//   });
//   test("submit button disable or not", async () => {
//     render(<SearchCountry />);
//     const sub = await screen.findByText(/submit/i);
//     expect(sub).toBeDisabled();
//   });
//   test("textfield available or not", async () => {
//     render(<SearchCountry />);
//     const sub = await screen.findByPlaceholderText(/enter country/i);
//     screen.debug(sub);
//     fireEvent.change(sub, { target: { value: "india" } });
//     expect(sub.value).toBe("india");
//   });
//   test("submit click event", async () => {
//     render(<SearchCountry />);
//     const inputElement = await screen.findByPlaceholderText(/enter country/i);
//     const buttonElement = await screen.findByRole("button", {
//       name: /submit/i,
//     });
//     fireEvent.change(inputElement, { target: { value: "india" } });
//     fireEvent.click(buttonElement);
//     expect(inputElement.value).toBe("india");
//   });
// });

import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import ReactDOM from "react-dom";
import { SearchCountry } from "../components/SearchCountry";

describe("details snapshot ", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchCountry />
        </Provider>
      </BrowserRouter>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("final", () => {
    expect(container).toMatchSnapshot();
  });
});
