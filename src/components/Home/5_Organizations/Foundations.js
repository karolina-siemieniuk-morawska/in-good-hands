import React from "react";

export default function Foundations() {
  fetch(`http://localhost:3000/foundations`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

  return null;
}
