import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import "./Foundations.scss";

export default function Foundations({
  chosenFund,
  paginate,
  currentPage,
  addActiveStyle,
}) {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fundsPerPage] = useState(3);

  // fetch for data from JSON Server
  useEffect(() => {
    const fetchFunds = async () => {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/${chosenFund}`);
      setFunds(response.data);
      setLoading(false);
    };

    fetchFunds();
  }, [chosenFund]);

  // Calculate currently displayed page
  const lastFund = currentPage * fundsPerPage;
  const firstFund = lastFund - fundsPerPage;
  const firstPage = funds.slice(firstFund, lastFund);

  // while waiting for server to response, display:
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <ul className="list">
        {firstPage.map((fund, index) => (
          <li key={index}>
            <div>
              <h5>{fund.name}</h5>
              <p>{fund.description}</p>
            </div>
            <p>{fund.donations.join(", ")}</p>
          </li>
        ))}
      </ul>
      <Pagination
        fundsPerPage={fundsPerPage}
        allFunds={funds.length}
        paginate={paginate}
        addActiveStyle={addActiveStyle}
      />
    </>
  );
}
