import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, data } from "react-router";
import Body from "../Body";
import { ReducerType } from "@reduxjs/toolkit";
import { act } from "react";
import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(data);
//     },
//   });
// });

it("Should render the body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforesearch = screen.getAllByTestId("resCard");
  expect(cardsbeforesearch.length).toBe(27);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInputu = screen.getByTestId("searchInput");
  fireEvent.change(searchInputu, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  //screen shoud load the 2 res card
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});

it("Should filterd top rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsbeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsbeforeFilter.length).toBe(27);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardsafterFilter = screen.getAllByTestId("resCard");
  expect(cardsafterFilter.length).toBe(23);
});
