/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import instagram from "../../../assets/Instagram.svg";
import facebook from "../../../assets/Facebook.svg";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="social-media">
      <div className="am-here"></div>
      <h5>2020 &copy; Karolina Siemieniuk-Morawska</h5>
      <div className="sm-logos">
        <a target="_blank" href="https://www.instagram.com/?hl=pl">
          <img src={instagram} alt="instagram" />
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </footer>
  );
};
