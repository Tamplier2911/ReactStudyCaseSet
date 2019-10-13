import React from "react";
import Field from "./Field";
import Button from "./Button";

const UserCreate = () => {
  return (
    <div className="container__form-wrapper">
      <form className="container__form">
        <Field />
        <Button />
      </form>
    </div>
  );
};

export default UserCreate;
