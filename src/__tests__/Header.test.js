import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test cases for Header component", () => {
  it("Should have Home link", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //Querying
    const HomeLink = screen.getByRole("link", { name: "Home" });

    //Assertion
    expect(HomeLink).toBeInTheDocument();
  });

  it("Should change Login button to Logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //Querying
    const LoginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(LoginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    //Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
