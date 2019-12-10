import React from "react";
import "../styles/Card.scss";
import dummy from "../assets/dummy.png";

export class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="Card__imgContainer">
          <img alt="" src={dummy} className="Card__imgContainer__img" />
        </div>
        <div className="Card__content">
          <p>DJES</p>
        </div>
      </div>
    );
  }
}
