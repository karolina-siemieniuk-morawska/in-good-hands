import React from "react";
import Title from "../../Elements/Title/index";
import "./style.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_content">
        <Title content="Contact us" />
        <form>
          <div>
            <label>Your name:</label>
            <input type="text" placeholder="John" />
            <label>
              Your e-mail:
              <input type="email" placeholder="john@gmail.com" />
            </label>
          </div>
          <label>
            Your message:
            <textarea placeholder="Hi! I'd like to ask..."></textarea>
          </label>
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
