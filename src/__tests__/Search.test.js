import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/ResListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should filter the body with search text", () => {
  // it("Should render the Body component with Search", async () => {
  //   await act(async () =>
  //     render(
  //       <BrowserRouter>
  //         <Body />
  //       </BrowserRouter>
  //     )
  //   );

  //   const cardsBeforeSearch = screen.getAllByTestId("resCard");
  //   // console.log(cardsBeforeSearch)
  //   expect(cardsBeforeSearch.length).toBe(9)

  //   const searchInput = screen.getByTestId("searchInput")
  //   const searchButton = screen.getByRole("button", {name: "Search"})

  //   fireEvent.change(searchInput, {target : {value: 'Hotel'}})
  //   fireEvent.click(searchButton);

  //   const cardsAfterSearch = screen.getAllByTestId("resCard");
  //   // console.log(cardsAfterSearch)

  //   expect(cardsAfterSearch.length).toBe(1)

  // });

  it("Should filter top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    // console.log(cardsBeforeFilter);
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name: "Top rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    // console.log(cardsAfterFilter);
    expect(cardsAfterFilter.length).toBe(3); 
  });
});
