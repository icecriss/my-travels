// src/Travel.js
import React from "react";

const Travel = ({ destination, country, image, distance }) => (
  <figure>
    <figcaption>
      <h3>Destination: {destination + " - " + country}</h3>
      <p>Distance: {distance}</p>
    </figcaption>
    <img className="pics" src={image} alt={destination + " " + country} />
    <hr />
  </figure>
);

export default Travel;
