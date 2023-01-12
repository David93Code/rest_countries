import React from "react";
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";

// To display the numbers of countries on the page
// You can just put currentpage * 5
// and the first u need current page * 5 - 4

//change numbers to arrows
//check if is first or last page to delete the arrow

// check both the page number and how many rows there are

const Pagination = ({
  countriesPerPage,
  totalCountries,
  paginate,
  setCurrentPage,
  currentPage,
  countries,
  setCountriesPerPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => setCurrentPage((page) => page + 1);
  // !pageNumbers ? setCurrentPage((page) => page + 1) : null;

  const prevPage = () => setCurrentPage((page) => page - 1);
  // currentPage > 1 ? setCurrentPage((page) => page - 1) : null;

  const changeRowsNumbers = (e) => {
    setCountriesPerPage(e.target.value);
  };

  console.log(pageNumbers);

  console.log(countries.length);

  return (
    <div>
      <nav>
        <button>
          <img
            onClick={prevPage}
            disabled={currentPage === 1}
            style={{ width: "1rem" }}
            src={leftArrow}
          />
        </button>
        <img
          onClick={nextPage}
          disabled={countries.length}
          style={{ width: "1rem" }}
          src={rightArrow}
        />
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
        <p>
          Rows per page:{" "}
          <select onChange={changeRowsNumbers}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>{" "}
        </p>
        <p>
          {currentPage * 5 - 4} - {currentPage * 5}
        </p>
        <p>{countriesPerPage}</p>
      </nav>
    </div>
  );
};

export default Pagination;
