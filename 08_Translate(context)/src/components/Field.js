import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // static contextType = LanguageContext;

  renderText(value) {
    switch (value) {
      case "english":
        return "Name";
      case "russian":
        return "Имя";
      case "ukrainian":
        return "Ім'я";
      case "french":
        return "Nom";
      default:
        return "Name";
    }
  }

  render() {
    // console.log(this.context);
    return (
      <React.Fragment>
        <label
          className="container__form--label"
          htmlFor="name"
        >
          <LanguageContext.Consumer>
            {({ language }) => this.renderText(language)}
          </LanguageContext.Consumer>
        </label>
        <input
          autoComplete="off"
          type="text"
          name="name"
          id="name"
          className="container__form--input"
        ></input>
      </React.Fragment>
    );
  }
}

export default Field;
