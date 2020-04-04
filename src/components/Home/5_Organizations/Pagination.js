import React from "react";

export default function Pagination({ fundsPerPage, allFunds, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allFunds / fundsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li
            key={number}
            className="small_button"
            onClick={e => paginate(e, number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}
