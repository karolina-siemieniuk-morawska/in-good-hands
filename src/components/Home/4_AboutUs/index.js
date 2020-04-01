import React from "react";
import Title from "../../Elements/Title/index";
import Image from "../../../assets/People.jpg";
import Signature from "../../../assets/Signature.svg";
import "./style.scss";

export default function AboutUs() {
  return (
    <div id="about" className="about_us">
      <div className="about_content">
        <Title content="About us" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <img src={Signature} alt="author signature" />
      </div>
      <img src={Image} alt="people" />
    </div>
  );
}
