import "./App.scss";
import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";

import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="white">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
