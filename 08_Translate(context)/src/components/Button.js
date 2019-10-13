import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static contextType = LanguageContext;

  render() {
    // console.log(this.context);
    let value = "";
    switch (this.context.language) {
      case "english":
        value = "Submit";
        break;
      case "russian":
        value = "Отправить";
        break;
      case "ukrainian":
        value = "Подати";
        break;
      case "french":
        value = "Soumettre";
        break;
      default:
        value = "Submit";
        break;
    }
    return (
      <ColorContext.Consumer>
        {color => (
          <input
            type="submit"
            value={value}
            className={`container__form--submit ${color}`}
          ></input>
        )}
      </ColorContext.Consumer>
    );
  }
}

// Button.contextType = LanguageContext;

export default Button;
