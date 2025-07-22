import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

console.log("logo.png");

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://github.com/kittuparuchuri12344/img/blob/main/logo.png?raw=true"
          alt="logo"
        />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
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

const resList = {
  data: [
    {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/4716f54a-61ad-4178-8265-51066cacbbd2_43836.jpg",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      deliveryTime: "25-30 mins",
    },
    {
      id: "588619",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
      locality: "Brigade Road",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.4,
      deliveryTime: "38-43 mins",
    },
    {
      id: "5938",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b88fe4d2-557a-42a5-a801-a43a40134004_5938.jpg",
      locality: "Tasker Town",
      areaName: "Shivaji Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      deliveryTime: "41-46 mins",
    },
    {
      id: "10575",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/c68665d3-1a31-4b58-baf5-81ba0a0945fb_10575.JPG",
      locality: "Richmond Town",
      areaName: "Central Bangalore",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      deliveryTime: "44-49 mins",
    },
    {
      id: "527591",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/b90a3e5c-b16c-4475-a87a-509c6de106d1_527591.jpg",
      locality: "Church Street",
      areaName: "Ashok Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 4.3,
      deliveryTime: "37-42 mins",
    },
    {
      id: "770772",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/9981e910-f172-48ba-b08f-c7e5141e7983_770772.JPG",
      locality: "Ali Askar Road",
      areaName: "Central Bangalore",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.4,
      deliveryTime: "49-54 mins",
    },
    {
      id: "502999",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/d119b3fc-a01e-428e-9b8b-9b94051a0c3e_502999.jpg",
      locality: "Lakshmi Road",
      areaName: "Central Bangalore",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.6,
      deliveryTime: "15-20 mins",
    },
    {
      id: "75093",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/e25518f7-e2b4-46a4-b4a2-a5e0bd378730_75093.JPG",
      locality: "Bashyam Circle",
      areaName: "Rajajinagar",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      deliveryTime: "43-48 mins",
    },
    {
      id: "393107",
      name: "EatFit",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/fd0351d2-f8a7-4b61-baec-886ab1e98170_393107.jpg",
      locality: "VASANTHA NAGAR",
      areaName: "Central Bangalore",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 4.6,
      deliveryTime: "53-58 mins",
    },
    {
      id: "317934",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/682f4b20-46b3-4085-b5ac-333022a55ca9_317934.JPG",
      locality: "5th Cross",
      areaName: "Wilson Garden",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.5,
      deliveryTime: "56-61 mins",
    },
    {
      id: "58568",
      name: "Sweet Chariot",
      cloudinaryImageId: "aun89df8igfy1zu0xf5v",
      locality: "Brigade Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts"],
      avgRating: 4.7,
      deliveryTime: "40-45 mins",
    },
    {
      id: "643832",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/c64e7364-7909-417f-a850-ea89f41c318e_643832.jpg",
      locality: "Langford Road",
      areaName: "Central Bangalore",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.8,
      deliveryTime: "25-30 mins",
    },
    {
      id: "681612",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
      locality: "Lakshmi Road",
      areaName: "Central Bangalore",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.6,
      deliveryTime: "25-30 mins",
    },
    {
      id: "124178",
      name: "Starbucks Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/13/daeed270-73bf-4e63-adc0-185aa8ac7edc_124178.jpg",
      locality: "Lavelle Road",
      areaName: "Lavelle Road",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.5,
      deliveryTime: "25-30 mins",
    },
    {
      id: "426730",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/6efb660b-047e-489e-8e35-478f79f2ac9f_426730.JPG",
      locality: "Lavelle Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.7,
      deliveryTime: "25-30 mins",
    },
    {
      id: "681363",
      name: "GLOBO Ice Creams Of The World",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/04968076-c09c-464e-90e2-e0dd29ea1dfa_681363.JPG",
      locality: "Lakshmi Road",
      areaName: "Central Bangalore",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts", "Bakery"],
      avgRating: 4.4,
      deliveryTime: "15-20 mins",
    },
    {
      id: "69876",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/f4848952-184f-414f-bbe3-7a39faeddec9_69876.jpg",
      locality: "UB City",
      areaName: "Vittal Mallya Road",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      deliveryTime: "28-33 mins",
    },
    {
      id: "17376",
      name: "Glen's Bakehouse",
      cloudinaryImageId: "m6jahioyu7zrodei5pcq",
      locality: "Lavelle Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Desserts", "Bakery", "Beverages", "Continental", "Italian"],
      avgRating: 4.7,
      deliveryTime: "35-40 mins",
    },
    {
      id: "692226",
      name: "BOOM - Sub Style Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c5bbd782-00ef-45a8-aae7-ed1f86cee653_692226.JPG",
      locality: "Lakshmi Road",
      areaName: "Central Bangalore",
      costForTwo: "₹250 for two",
      cuisines: ["Snacks", "Indian", "Desserts"],
      avgRating: 4.6,
      deliveryTime: "25-30 mins",
    },
    {
      id: "750396",
      name: "Daily Kitchen - Everyday Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/05595a0f-d3f2-474e-8183-3ef3d67f3ead_750396.jpg",
      locality: "Lakshmi Road",
      areaName: "Central Bangalore",
      costForTwo: "₹250 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.4,
      deliveryTime: "15-20 mins",
    },
  ],
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.data.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
