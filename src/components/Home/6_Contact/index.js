import React from "react";
import Title from "../../Elements/Title/index";
import Form from "./Form";
import instagram from "../../../assets/Instagram.svg";
import facebook from "../../../assets/Facebook.svg";
import "./style.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_content">
        <Title content="Contact us" />
        <Form />
      </div>

      <div className="social-media">
        <a href="https://www.instagram.com/?hl=pl">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
}
