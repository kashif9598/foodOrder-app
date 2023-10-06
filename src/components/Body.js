import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[5].card.card.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5].card.card.gridElements?.infoWithStyle.restaurants
    );
  };

  const clearHandler = () => {
    setFilteredRestaurants(listOfRestaurants);
    setSearchText("");
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>No Internet Connection</h1>;

  const { setUserInfo, loggedInUser } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-slate-200">
      <div className="filter flex items-center justify-between">
        <div className="search p-2">
          <input
            data-testid="searchInput"
            type="text"
            className="search-box border-2 border-black rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-2 ml-2 bg-gray-500 rounded-md"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
          <button
            className="px-2 ml-2 bg-gray-500 rounded-md"
            onClick={clearHandler}
          >
            Clear
          </button>
        </div>
        <div>
          <div className="m-2">
            <label className="px-2">User Name:</label>
            <input
              className="border-black border-2"
              value={loggedInUser}
              onChange={(e) => setUserInfo(e.target.value)}
            />
          </div>
          <button
            className="filter-btn px-2 my-2 bg-gray-500 rounded-md"
            onClick={() => {
              const topRatedRes = listOfRestaurants.filter(
                (res) => res?.info?.avgRatingString > "4.2"
              );
              setFilteredRestaurants(topRatedRes);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap p-5">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
