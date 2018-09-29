import React from "react";
import Travel from "./Travel";

// import image1 from "./images/sydney.jpg";
// import image2 from "./images/sydney.jpg";

// src/Travels.js

const travels = [
  {
    destination: "Seattle",
    country: "USA",
    distance: "8 686 km",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sunset_seattle.jpg/798px-Sunset_seattle.jpg"
  },
  {
    destination: "Dublin",
    country: "Ireland",
    distance: "1 405 km",
    image:
      "https://c.pxhere.com/photos/e0/2f/dublin_ireland_architecture_historically_landmark_places_of_interest_building_dark-1194176.jpg!d"
  },
  {
    destination: "Ayers Rock",
    country: "Australia",
    distance: "14 750 km",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Uluru%2C_helicopter_view%2C_cropped.jpg/800px-Uluru%2C_helicopter_view%2C_cropped.jpg"
  },
  {
    destination: "Vancouver",
    country: "Canada",
    distance: "8 571 km",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Vancouver_ib.jpg"
  },
  {
    destination: "Djibouti",
    country: "Djibouti",
    distance: "8 430 km",
    image:
      "https://cdn.pixabay.com/photo/2013/07/05/12/09/djibouti-143451_960_720.jpg"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel
        destination={travel.destination}
        country={travel.country}
        image={travel.image}
        distance={travel.distance}
      />
    ))}
  </div>
);

export default Travels;
