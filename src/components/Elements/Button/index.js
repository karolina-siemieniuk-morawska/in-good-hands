import React from "react";
import "./style.scss";

export default function Button({ content, className, handleClick }) {
  return (
    <button className={className} onClick={handleClick}>
      {content}
    </button>
  );
}
