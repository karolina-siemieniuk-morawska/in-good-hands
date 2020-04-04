import React from "react";

export default function Organizations() {
  fetch(`http://localhost:3000/organizations`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

  return null;
}
