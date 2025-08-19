import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlinestatus";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [ListOfRestaurants, setListOfRestraunt] = useState(resList.data);
  const [filteredRestaurant, setfilteredRestaurant] = useState(resList.data);
  //call the usesate on the top.
  //usestate variables should not of component ontop and if else , for loop.

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //whenever state variables update, reat triggers a reconcilation cycle (re-renders the component).

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();

  //   // Find the card that contains restaurant information
  //   const restaurantCard = json.data.cards.find(
  //     (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );

  //   if (restaurantCard) {
  //     setListOfRestraunt(
  //       restaurantCard.card.card.gridElements.infoWithStyle.restaurants.map(
  //         (restaurant) => restaurant.info
  //       )
  //     );
  //     setfilteredRestaurant(
  //       restaurantCard.card.card.gridElements.infoWithStyle.restaurants.map(
  //         (restaurant) => restaurant.info
  //       )
  //     );
  //   }
  //   // console.log(json);
  // };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return (
      <h1>Looks like you are ofline!! Please check you internet connetion</h1>
    );
  }
  // //Conditional Rendering
  // if (ListOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-blue-200 mx-4 rounded-lg cursor-pointer"
            onClick={() => {
              //Filter the restarunt card and update the UI
              //searchTextx

              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              // console.log("hello");
              const filteredList = ListOfRestaurants.filter(
                (res) => res.avgRating > 4
              );
              setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            {restaurant.isPromoted || restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
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
