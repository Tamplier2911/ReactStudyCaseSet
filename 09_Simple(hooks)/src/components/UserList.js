import React from "react";
import useResources from "./useResources";

const UsersList = () => {
  const users = useResources("users");
  return (
    <ul>
      {users.map(el => {
        return <li key={el.id}>{el.name}</li>;
      })}
    </ul>
  );
};

export default UsersList;
