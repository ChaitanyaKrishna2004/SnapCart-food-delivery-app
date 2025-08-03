import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { OFFER_URL } from "../utils/constants";
import menuList from "../utils/menuData";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(menuList);
  console.log(resInfo);
  const { name, cuisines, avgRating, costForTwoMessage, locality } =
    resInfo.data[0].data.cards[2].card.card.info;

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo.data[0].data.cards[2].card.card.info.sla;

  const itemCards =
    resInfo.data[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
      .card.itemCards;

  const offerCards =
    resInfo.data[0].data.cards[3].card.card.gridElements.infoWithStyle.offers;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="itemlist">
      <h1>{name}</h1>
      <h3 className="cuisines">Cuisines:- {cuisines.join(",")}</h3>
      <h3>
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
        {avgRating}
      </h3>
      <h3>
        <FontAwesomeIcon icon={faClock} style={{ color: "#1f3751" }} />
        {minDeliveryTime}-{maxDeliveryTime} mins
      </h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Outlet:- {locality}</h3>
      <h3>Deals for you</h3>
      <ul>
        {offerCards.map((offer) => (
          <li key={offer.info.couponCode || offer.info.header}>
            {" "}
            <img className="offerimg" src={OFFER_URL + offer.info.logoBottom} />
            {offer.info.couponCode}
            {offer.info.header}
            {offer.info.description}
          </li>
        ))}
      </ul>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- RS {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
