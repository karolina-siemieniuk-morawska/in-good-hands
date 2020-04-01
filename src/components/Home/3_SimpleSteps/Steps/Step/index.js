import React from "react";

export default function Step({ icon, alt, title, description }) {
  return (
    <div className="step">
      <img src={icon} alt={alt} />
      <p className="step_title">{title}</p>
      <p className="step_description">{description}</p>
    </div>
  );
}
