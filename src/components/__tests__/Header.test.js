const { render, screen, fireEvent } = require("@testing-library/react");
import appStore from "../../utils/appStor";
import Headers from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  // not the good way to find
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("(0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  // /items/ its called a regex
  const cartItems = screen.getByText(/items/);

  expect(cartItems).toBeInTheDocument();
});

it("Should Change login button to logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
