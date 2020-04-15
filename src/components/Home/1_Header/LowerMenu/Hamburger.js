import React from "react";

export const Hamburger = () => {
  const handleMenu = () => {
    document.querySelector(".lower_menu").toggleAttribute("hidden");
  };

  return (
    <div className="menu_button" onClick={handleMenu}>
      <div className="hamburger"></div>
    </div>
  );
};
