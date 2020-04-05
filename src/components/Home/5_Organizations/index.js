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
    setOrganizationsGroup("foundations");
    paginate(1);
    if (event.target) {
      event.target.nextSibling.classList.remove("active");
      event.target.nextSibling.nextSibling.classList.remove("active");
      event.target.classList.add("active");
    }
  };

  const handleOrgs = (event) => {
    setOrganizationsGroup("organizations");
    paginate(1);
    if (event.target) {
      event.target.nextSibling.classList.remove("active");
      event.target.previousSibling.classList.remove("active");
      event.target.classList.add("active");
    }
  };

  const handleColls = (event) => {
    setOrganizationsGroup("collections");
    paginate(1);
    if (event.target) {
      event.target.previousSibling.classList.remove("active");
      event.target.previousSibling.previousSibling.classList.remove("active");
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
          handleClick={handleOrgs}
        />
        <Button
          content="Local Collections"
          className="button small_button"
          handleClick={handleColls}
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
        currentPage={currentPage}
      />
    </div>
  );
}
