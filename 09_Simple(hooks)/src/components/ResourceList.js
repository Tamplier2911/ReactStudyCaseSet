import "./ResourceList.scss";
import React from "react";
// { useState, useEffect }
import useResources from "./useResources";
import UserList from "./UserList";

const ResourceList = props => {
  // const [resources, setResources] = useState([]);

  // const fetchResource = async props => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${props.resource}`
  //   );
  //   setResources(response.data);
  // };

  // useEffect(() => {
  //   fetchResource(props);
  // }, [props.resource]);

  // Same Functionality but with built in function
  // useEffect(() => {
  //   (async props => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${props.resource}`
  //     );
  //     setResources(response.data);
  //   })(props);
  // }, [props.resource]);

  // console.log(resources);

  const resources = useResources(props.resource);
  return (
    <div className="content-container">
      <UserList />
      <ul>
        {resources.map(el => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ResourceList;
