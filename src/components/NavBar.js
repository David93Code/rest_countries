import React, { useState } from "react";
import Countries from "./Countries";

import "../css/navBar.css";

const NavBar = ({ countries }) => {
  const [searchInput, setSearchInput] = useState("");

  let searchHandler = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const filteredCountries = countries.filter((country) => {
    if (searchInput === "") {
      return country;
    } else {
      return country.name?.common.toLowerCase().includes(searchInput);
    }
  });

  return (
    <div>
      <header>
        <section className="burger__countries">
          <div className="burger">
            <div className="burgerLines"></div>
            <div className="burgerLines"></div>
            <div className="burgerLines"></div>
          </div>

          <h1>Country</h1>
        </section>

        <div className="search">
          <div className="search-bar">
            <ion-icon name="search-outline"></ion-icon>
            <input
              onChange={searchHandler}
              name="search-input"
              placeholder="Search by country name"
            ></input>
          </div>
        </div>
      </header>
      <Countries filteredCountries={filteredCountries} />

      {/* 
        <input
      
          name="search-input"
          placeholder="Search by Country Name"
        ></input> */}

      {/* <Search countries={countries}/> */}
    </div>
  );
};

export default NavBar;
