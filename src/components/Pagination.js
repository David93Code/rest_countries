import React from "react";
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";
import "../css/pagination.css";

const Pagination = ({
  countriesPerPage,
  totalCountries,
  setCurrentPage,
  currentPage,
  setCountriesPerPage,
}) => {
  const pageNumbers = [];

  //We need the totalCountries to be able to calculate how many pages we need to display
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () =>
    setCurrentPage((page) => (page !== pageNumbers.length ? page + 1 : page));

  const prevPage = () => setCurrentPage((page) => (page > 1 ? page - 1 : page));

  const changeRowsNumbers = (e) => {
    setCountriesPerPage(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="paginationCommandsContainer">
      <p>Rows per page: </p>
      <select onChange={changeRowsNumbers}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>{" "}
      <p>
        {/* Dynamically show the order of countries per page */}
        {currentPage * countriesPerPage - (countriesPerPage - 1)} -{" "}
        {currentPage * countriesPerPage > totalCountries
          ? totalCountries
          : currentPage * countriesPerPage}
      </p>
      <img
        // Assigns different className according to which page are we on
        className={currentPage !== 1 ? "paginationArrows" : " disabledArrow"}
        onClick={prevPage}
        src={leftArrow}
        alt="arrow to the left"
      />
      <img
        className={
          currentPage * countriesPerPage >= totalCountries
            ? "disabledArrow"
            : "paginationArrows"
        }
        onClick={nextPage}
        src={rightArrow}
        alt="arrow to the right"
      />
    </div>
  );
};

export default Pagination;
