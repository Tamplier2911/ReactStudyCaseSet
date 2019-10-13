import React, { Component } from "react";

const Context = React.createContext("english");

export class LanguageStore extends Component {
  state = { language: "english" };

  onLanguageChange = lang => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onLanguageChange: this.onLanguageChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
