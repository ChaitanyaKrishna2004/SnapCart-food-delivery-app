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
    <div className="m-3 h-[375px] w-[350px] bg-gray-200  rounded-lg hover:bg-blue-200">
      <img
        className="rounded-lg w-full h-48 object-cover mb-4"
        src={CDN_URL + resData.cloudinaryImageId}
        alt="res-logo"
      />
      <div className="px-2">
        <h3 className="font-bold py-2  text-lg">{name}</h3>
        <h4 className="text-gray-700 mb-2">{cuisines.join(", ")}</h4>
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-1 text-yellow-600 font-semibold">
            {avgRating} <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="text-gray-800 font-medium">{costForTwo}</span>
        </div>
        <h5 className="text-gray-800">{deliveryTime}</h5>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  // console.log("hello");
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          PROMOTED
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
