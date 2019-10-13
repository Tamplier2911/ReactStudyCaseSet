import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
import Loader from "./Loader";
import Error from "./Error";

import useLocation from "./useLocation";

const App = () => {
  const [lat, long, denied] = useLocation();

  let content;
  if (denied) {
    content = <Error denied={denied} />;
  } else if (lat && long) {
    content = <DisplaySeason lat={lat} long={long} />;
  } else {
    content = (
      <Loader text="Your geolocation data is required to proceed..." />
    );
  }

  console.log(lat, long, denied);

  return <div className="container">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
