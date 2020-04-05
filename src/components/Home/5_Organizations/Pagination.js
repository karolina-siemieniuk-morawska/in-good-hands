import React, { useEffect, useState } from "react";

export default function Pagination({
  fundsPerPage,
  allFunds,
  paginate,
  addActiveStyle,
}) {
  const pageNumbers = [];

  // set amount of pages based on number of given records
  for (let i = 1; i <= Math.ceil(allFunds / fundsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`small_button ${number === 1 ? "active" : ""}`}
            onClick={(e) => {
              paginate(number);
              addActiveStyle(e);
            }}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}
