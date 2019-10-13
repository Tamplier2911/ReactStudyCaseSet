import "./GoogleAuth.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "insertKeyHere",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(
        this.auth.currentUser.get().getId()
      );
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  componentDidUpdate() {}
  componentWillMount() {}

  renderAuthButton() {
    if (this.props.isSignedIn === true) {
      return (
        <button
          className="btn"
          onClick={this.onSignOutClick}
        >
          Sign Out
          <img
            className="btn__image"
            alt="google icon"
            src="https://bit.ly/2STQ4bB"
          ></img>
        </button>
      );
    } else if (this.props.isSignedIn === false) {
      return (
        <button
          className="btn"
          onClick={this.onSignInClick}
        >
          Sign In
          <img
            className="btn__image"
            alt="google icon"
            src="https://bit.ly/2STQ4bB"
          ></img>
        </button>
      );
    } else {
      return (
        <div className="loading">
          Loading...
          <img
            className="loading__spinner"
            alt="google loading icon"
            src="https://bit.ly/2YWNKTu"
          ></img>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
