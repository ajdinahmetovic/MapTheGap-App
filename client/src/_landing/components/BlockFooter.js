import React from "react";
import "../styles/BlockFooter.scss";
import mapVec from "../assets/map.png";
import logo from "../assets/logo.svg";
import { PropTypes } from "prop-types";

export class BlockFooter extends React.Component {
  render() {
    return (
      <div className="BlockFooter">
        <div className="BlockFooter__info">
          <div className="BlockFooter__info__blank"></div>
          <div className="BlockFooter__info__content">
            <div className="BlockFooter__info__content__countries">
              <ul className="BlockFooter__info__content__list">
                <li className="BlockFooter__info__content__list__title">
                  {this.context.t("APP.COUNTRIES")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.BOSNIA")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.MACEDONIA")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.MONTENEGRO")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.SLOVENIA")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.POLAND")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.SERBIA")}
                </li>
              </ul>
            </div>
            <div className="BlockFooter__info__content__about">
              <ul className="BlockFooter__info__content__list">
                <li className="BlockFooter__info__content__list__title">
                  {this.context.t("APP.ABOUT")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.ABOUT.ITEM_1")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.ABOUT.ITEM_2")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.ABOUT.ITEM_3")}
                </li>
                <li className="BlockFooter__info__content__list__item">
                  {this.context.t("APP.ABOUT.ITEM_4")}
                </li>
              </ul>
            </div>
            <div className="BlockFooter__info__content__social">
              <ul className="BlockFooter__info__content__list">
                <li className="BlockFooter__info__content__list__title">
                  {this.context.t("APP.FIND_US")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="BlockFooter__map">
          <img alt="map" src={mapVec} className="BlockFooter__map__img" />
        </div>
      </div>
    );
  }
}
BlockFooter.contextTypes = {
  t: PropTypes.func
};
