import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

import ukr from "../images/ukr.png";
import fr from "../images/fr.png";
import ru from "../images/ru.png";
import en from "../images/en.png";

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    // console.log(this.context);
    return (
      <div className="container__select">
        <h2 className="container__header">
          Select a language:
        </h2>
        <div className="container__image-box">
          <div
            className="container__image"
            onClick={() =>
              this.context.onLanguageChange("english")
            }
          >
            <img
              src={en}
              alt="flag"
              className="container__img"
            ></img>
          </div>
          <div
            className="container__image"
            onClick={() =>
              this.context.onLanguageChange("french")
            }
          >
            <img
              src={fr}
              alt="flag"
              className="container__img"
            ></img>
          </div>
          <div
            className="container__image"
            onClick={() =>
              this.context.onLanguageChange("ukrainian")
            }
          >
            <img
              src={ukr}
              alt="flag"
              className="container__img"
            ></img>
          </div>
          <div
            className="container__image"
            onClick={() =>
              this.context.onLanguageChange("russian")
            }
          >
            <img
              src={ru}
              alt="flag"
              className="container__img"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
