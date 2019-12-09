import React from "react";
import "../styles/Button.scss";

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.type}>
        {this.props.text}
      </button>
    );
  }
}
