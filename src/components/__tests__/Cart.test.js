import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStor";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
it("should load Restaurant Menu Component and show 12 items after clicking Veg Starter", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = await screen.findByText("Veg Starter (12)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(12);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("(1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("(2 items)")).toBeInTheDocument();
  const foodItems1 = screen.getAllByTestId("foodItems");
  expect(foodItems1.length).toBe(14);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  const foodItems2 = screen.getAllByTestId("foodItems");
  expect(foodItems2.length).toBe(12);
  expect(screen.getByText("Cart is empty.Add items to the cart"))
    .toBeInTheDocument;
});
