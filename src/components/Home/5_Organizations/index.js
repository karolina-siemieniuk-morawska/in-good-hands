import React, { useState } from "react";
import Title from "../../Elements/Title/index";
import Button from "../../Elements/Button/index";
import Foundations from "./Foundations";
import "./style.scss";

export default function Organizations() {
  const [organizationsGroup, setOrganizationsGroup] = useState("foundations");
  const [currentPage, setCurrentPage] = useState(1);

  // change currently displayed page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // change currently displayed organisations group
  const handleFunds = (event) => {
    if (event.target.innerText === "Foundations") {
      setOrganizationsGroup("foundations");
    } else if (event.target.innerText === "Organizations") {
      setOrganizationsGroup("organizations");
    } else {
      setOrganizationsGroup("collections");
    }
    paginate(1);
    addActiveStyle(event);
  };

  // add highlight to active page
  const getAllSiblings = (element, parent) => {
    const babies = [...parent.children];
    return babies.filter((child) => child !== element);
  };

  const addActiveStyle = (event) => {
    if (event.target) {
      const siblings = getAllSiblings(event.target, event.target.parentNode);
      siblings.forEach((sibling) => sibling.classList.remove("active"));
      event.target.classList.add("active");
    }
  };

  return (
    <div id="organizations" className="organzations">
      <Title content="Who are we helping?" />
      <div className="orgs_buttons">
        <Button
          content="Foundations"
          className="button small_button active"
          handleClick={handleFunds}
        />
        <Button
          content="Organizations"
          className="button small_button"
          handleClick={handleFunds}
        />
        <Button
          content="Local Collections"
          className="button small_button"
          handleClick={handleFunds}
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
      <Foundations
        chosenFund={organizationsGroup}
        paginate={paginate}
        addActiveStyle={addActiveStyle}
        currentPage={currentPage}
      />
    </div>
  );
}
