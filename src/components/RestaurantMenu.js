import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { OFFER_URL } from "../utils/constants";
import menuList from "../utils/menuData";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurentCategory";

const RestaurantMenu = () => {
  const [resInfo] = useState(menuList);

  const [showIndex, setshowIndex] = useState(null);
  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo.data[0].data.cards[2].card.card.info;

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo.data[0].data.cards[2].card.card.info.sla;

  const itemCards =
    resInfo.data[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
      .card.itemCards;

  const categories =
    resInfo?.data[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center px-2 py-4">
      <h1 className="font-bold my-6 text-2xl">MENU ITEMS</h1>
      <h3 className="font-bold text-lg">Cuisines:- {cuisines.join(",")}</h3>
      <h3 className="font-bold text-lg">
        Rating:
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
        {avgRating}
      </h3>
      <h3 className="font-bold text-lg">
        <FontAwesomeIcon icon={faClock} style={{ color: "#1f3751" }} />
        {minDeliveryTime}-{maxDeliveryTime} mins
      </h3>
      <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
      {/* categories accordions */}
      {categories.map((categorie, index) => (
        // controlled component
        <RestaurantCategory
          key={categorie?.card?.card.title}
          data={categorie?.card?.card}
          showItems={index === showIndex ? true : false}
          index={index}
          showIndex={showIndex}
          setshowIndex={setshowIndex}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
