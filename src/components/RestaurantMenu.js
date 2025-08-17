import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { OFFER_URL } from "../utils/constants";
import menuList from "../utils/menuData";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo] = useState(menuList);

  const { name, cuisines, avgRating, costForTwoMessage, locality } =
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

  console.log(categories);

  const offerCards =
    resInfo.data[0].data.cards[3].card.card.gridElements.infoWithStyle.offers;

  return (
    <div className=" flex-row items-center justify-center">
      <div className="text-center px-2 py-4">
        <h1 className="font-bold my-6 text-2xl">MENU ITEMS</h1>
        <h3 className="font-bold text-lg">Cuisines:- {cuisines.join(",")}</h3>
        <div className="flex flex-col items-center text-center">
          <h3>
            Rating:
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
            {avgRating}
          </h3>
          <h3>
            <FontAwesomeIcon icon={faClock} style={{ color: "#1f3751" }} />
            {minDeliveryTime}-{maxDeliveryTime} mins
          </h3>
        </div>
        <h3>{costForTwoMessage}</h3>
        <h3>Outlet:- {locality}</h3>
      </div>
      <div>
        <ul>
          {offerCards.map((offer) => (
            <li key={offer.info.couponCode || offer.info.header}>
              {" "}
              <img
                className="offerimg"
                src={OFFER_URL + offer.info.logoBottom}
              />
              {offer.info.couponCode}
              {offer.info.header}
              {offer.info.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
