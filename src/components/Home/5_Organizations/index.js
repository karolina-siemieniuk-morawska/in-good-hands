import React, { useState } from "react";
import Title from "../../Elements/Title/index";
import Button from "../../Elements/Button/index";
import Foundations from "./Foundations";
import "./style.scss";

export default function Organizations() {
  const [organizationsGroup, setOrganizationsGroup] = useState("foundations");
  // const [pageNumb, setPageNumb] = useState(0);

  const handleFunds = () => {
    setOrganizationsGroup("foundations");
    // setPageNumb(1);
  };

  const handleOrgs = () => {
    setOrganizationsGroup("organizations");
    // setPageNumb(1);
  };

  const handleColls = () => {
    setOrganizationsGroup("collections");
    // setPageNumb(1);
  };

  return (
    <div id="organizations" className="organzations">
      <Title content="Who are we helping?" />
      <div className="orgs_buttons">
        <Button
          content="Foundations"
          className="button small_button"
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
      <Foundations chosenFund={organizationsGroup} />
    </div>
  );
}
// pageNumb={pageNumb}
