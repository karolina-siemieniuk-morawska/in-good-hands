import React from "react";
import Title from "../../Elements/Title/index";
import Form from "./Form";
import "./style.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_content">
        <Title content="Contact us" />
        <Form />
      </div>
    </div>
  );
}
