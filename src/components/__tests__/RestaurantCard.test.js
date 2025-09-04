import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardWithPromotedLabel resData={MOCK_DATA} />);
  const Promoted = screen.getByText("PROMOTED");
  expect(Promoted).toBeInTheDocument();
});
