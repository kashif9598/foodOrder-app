import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/ResCardMock.json";
import VEG_LABEL_MOCK_DATA from "../mocks/withVegMock.json";

describe("Test Cases for RestaurantCard component", () => {
  it("should render RestaurantCard component with Props", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    //Querying
    const name = screen.getByText("Moti Mahal Delux");

    //assertion
    expect(name).toBeInTheDocument();
  });

  it("should render RestaurantCard component with veg Label", () => {
    const RestaurantCardVeg = withVegLabel(RestaurantCard)
    render(<RestaurantCardVeg resData={VEG_LABEL_MOCK_DATA} />);

    //Querying
    const vegLabel = screen.getByText("Veg");

    //assertion
    expect(vegLabel).toBeInTheDocument();
  });
});
