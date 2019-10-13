import "./Loader.css";
import React from "react";

const Loader = props => {
  return (
    <div className="loader">
      <img
        className="loader__image"
        src="https://bit.ly/2RJ5Kil"
        alt="loader"
      ></img>
      <p className="loader__text">{props.text}</p>
    </div>
  );
};

export default Loader;
