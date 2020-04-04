import React from "react";
import Title from "../../Elements/Title/index";
import Button from "../../Elements/Button/index";
import "./style.scss";
// , useState, useEffect

export default function Organizations() {
  // const [orgs, setOrgs] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [orgsPerPage, setOrgsPerPage] = useState(3);
  const handleOrgs = () => {
    console.log("orgs");
  };

  const handleFunds = () => {
    console.log("funds");
  };

  const handleColls = () => {
    console.log("colls");
  };

  return (
    <div id="organizations" className="organzations">
      <Title content="Who are we helping?" />
      <div className="orgs_buttons">
        <Button
          content="Foundations"
          className="button small_button"
          handleClick={handleOrgs}
        />
        <Button
          content="Organizations"
          className="button small_button"
          handleClick={handleFunds}
        />
        <Button
          content="Local Collections"
          className="button small_button"
          handleClick={handleColls}
        />
      </div>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
    </div>
  );
}
