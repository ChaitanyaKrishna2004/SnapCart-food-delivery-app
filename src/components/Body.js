import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListOfRestaurants, setListOfRestraunt] = useState(resList.data);

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
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

//hello

export default Body;
