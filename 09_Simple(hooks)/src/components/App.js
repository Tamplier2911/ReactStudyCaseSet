import "./App.scss";
import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="container">
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          className="btn"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      {/* <div className="content-container">{resource}</div> */}
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
