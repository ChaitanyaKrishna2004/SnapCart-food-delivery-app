import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div className="res-card">
      <img
        className="reslogo"
        src={CDN_URL + resData.cloudinaryImageId}
        alt="res-logo"
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="res-card-rating-price">
          <span className="res-card-rating">
            {avgRating} <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="res-card-price">{costForTwo}</span>
        </div>
        <h5>{deliveryTime}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
