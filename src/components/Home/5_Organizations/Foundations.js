import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function Foundations({ chosenFund, pageNumb }) {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [fundsPerPage] = useState(3);

  useEffect(() => {
    const fetchFunds = async () => {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/${chosenFund}`);
      setFunds(response.data);
      setLoading(false);
    };

    fetchFunds();
  }, [chosenFund]);

  // useEffect(() => {
  //   paginate(1);
  // }, [pageNumb]);

  // First displayed page
  const lastFund = currentPage * fundsPerPage;
  const firstFund = lastFund - fundsPerPage;
  const firstPage = funds.slice(firstFund, lastFund);

  const paginate = (e, pageNumber) => {
    console.log(e.target);
    if (e.target) {
      e.target.classList.add("active");
    }
    setCurrentPage(pageNumber);
  };

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
      />
    </>
  );
}
