import "./styles.css";
import React, { useState } from "react";

const music = [
  {
    name: "Alan Walker - Faded (Lost Stories Remix) ",
    rating: "4.7",
    src: "https://www.youtube.com/watch?v=sv81BgWl2U0"
  }
];

const food = [
  {
    name: "Gobi Manchurian",
    rating: "4.7"
  }
];

const travelPlaces = [
  {
    name: "Maravante Beach",
    about: "",
    rating: "4.1"
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>My recommendations</h1>
      <h3> Click one of the tabs below</h3>
      <ul>
        <li>Music</li>
        <li>Food</li>
        <li>Travel Destinations</li>
      </ul>
    </div>
  );
}
