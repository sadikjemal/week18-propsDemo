import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    const { image, title, price, description } = this.props;

    return (
      <div className="single-food">
        <div className="img">
          <img src={image} alt={title} />
        </div>

        <div className="title-price">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>

        <div className="food-desc">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}