import "./DisplaySeason.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Kitty is sweating!",
    image: "https://bit.ly/2X2DCYw",
    icon: "https://bit.ly/2x8Quld"
  },
  winter: {
    text: "Kitty is freezing!",
    image: "https://bit.ly/2Krs2nF",
    icon: "https://bit.ly/2x6RSVv"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const DisplaySeason = props => {
  const season = getSeason(
    props.lat,
    new Date().getMonth()
  );
  const { text, icon, image } = seasonConfig[season];

  return (
    <div className={`season ${season}`}>
      <div className="season__top">
        <img
          src={image}
          alt="Season"
          className="season__image"
        ></img>
        <img
          src={icon}
          alt="Icon"
          className="season__icon--1"
        ></img>
        <img
          src={icon}
          alt="Icon"
          className="season__icon--2"
        ></img>
        <img
          src={icon}
          alt="Icon"
          className="season__icon--3"
        ></img>
      </div>
      <div className="season__bottom">
        <p className="season__description">{text}</p>
        <p className="season__lat">Tatitude: {props.lat}</p>
        <p className="season__long">
          Longitude: {props.long}
        </p>
      </div>
    </div>
  );
};

export default DisplaySeason;
