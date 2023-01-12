import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import { useState } from "react";

const HomePage = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(5);

  // Get current posts
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  console.log(currentPage);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavBar countries={currentCountries} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        countries={countries}
        setCountriesPerPage={setCountriesPerPage}
      />
    </div>
  );
};

export default HomePage;
