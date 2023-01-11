import React from "react";

// To display the numbers of countries on the page
// You can just put currentpage * 5
// and the first u need current page * 5 - 4

//change numbers to arrows
//check if is first or last page to delete the arrow

// check both the page number and how many rows there are

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
      <p>Daniele on maltavat runkari</p>
    </nav>
  );
};

export default Pagination;
