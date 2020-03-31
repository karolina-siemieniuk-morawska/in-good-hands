import React from "react";

export default function Column({ number, title, description }) {
  return (
    <div className="column">
      <p className="col_number">{number}</p>
      <p className="col_title">{title}</p>
      <p className="col_description">{description}</p>
    </div>
  );
}
