import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [ListOfRestaurants, setListOfRestraunt] = useState(resList.data);
  const [filteredRestaurant, setfilteredRestaurant] = useState(resList.data);

  //call the usesate on the top.
  //usestate variables should not of component ontop and if else , for loop.
  const [searchText, setSearchText] = useState("");

  //whenever state variables update, reat triggers a reconcilation cycle (re-renders the component).

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Find the card that contains restaurant information
    const restaurantCard = json.data.cards.find(
      (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    if (restaurantCard) {
      setListOfRestraunt(
        restaurantCard.card.card.gridElements.infoWithStyle.restaurants.map(
          (restaurant) => restaurant.info
        )
      );
      setfilteredRestaurant(
        restaurantCard.card.card.gridElements.infoWithStyle.restaurants.map(
          (restaurant) => restaurant.info
        )
      );
    }
    console.log(json);
  };
  // //Conditional Rendering
  // if (ListOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="btnsearch"
          onClick={() => {
            //Filter the restarunt card and update the UI
            //searchText
            console.log(searchText);

            const filteredRestaurant = ListOfRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setfilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
