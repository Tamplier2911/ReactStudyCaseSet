import "./Error.css";
import React from "react";

const Error = props => {
  return (
    <div className="error">
      <img
        className="error__image"
        src="https://bit.ly/31VmLdt"
        alt="error"
      ></img>
      <p className="error__text">{props.denied}</p>
    </div>
  );
};

Error.defaultProps = {
  denied: "Error 404!"
};

export default Error;
