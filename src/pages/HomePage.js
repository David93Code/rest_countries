import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import { useState } from "react";

const HomePage = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(5);
  const [searchInput, setSearchInput] = useState("");

  // Get current posts
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // Takes the desired amount of countries from the countries array based on the countriesPerPage State
  // sort with localeCompare puts the countries in alphabetical order
  const paginatedCountries = countries
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .slice(indexOfFirstCountry, indexOfLastCountry);
  // Filters ALL the Countries in the countries array and returns the ones that include the searchInput in their names
  // Then slices them creating the pagination
  // sort with localeCompare puts the countries in alphabetical order
  const searchedCountries = countries
    .filter((country) => {
      return country.name?.common.toLowerCase().includes(searchInput);
    })
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .slice(indexOfFirstCountry, indexOfLastCountry);

  // Returns the array of countries based on the search input being empty or not
  // filteredCountries is sent to the <NavBar />
  const filteredCountries =
    searchInput === "" ? paginatedCountries : searchedCountries;

  // Depending on the search input returns either the countries array´s length
  // or the number of the countries that include the search input  in their name
  // so that it would be possible to paginate
  const totalCountries =
    searchInput === ""
      ? countries.length
      : countries.filter((country) => {
          return country.name?.common.toLowerCase().includes(searchInput);
        }).length;

  return (
    <div>
      <NavBar
        countries={filteredCountries}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setCurrentPage={setCurrentPage}
      />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={totalCountries}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        countries={filteredCountries}
        setCountriesPerPage={setCountriesPerPage}
      />
    </div>
  );
};

export default HomePage;
