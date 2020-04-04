import React from "react";

export default function Collections() {
  fetch(`http://localhost:3000/collections`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

  return null;
}
