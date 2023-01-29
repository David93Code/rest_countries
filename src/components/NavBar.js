import Countries from "./Countries";

import "../css/navBar.css";

const NavBar = ({ countries, setSearchInput, setCurrentPage }) => {
  let searchHandler = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    // Need to set the page to 1 because after searching the number of countries decreases
    //so it would not be able to see any countries at the current page but you would see them only on the first pages
    //all the way down to the first one the more you type  on the search bar
    setCurrentPage(1);
  };

  return (
    <div>
      <header>
        <section className="burger-and-country">
          <div className="burger">
            <div className="burgerLines"></div>
            <div className="burgerLines"></div>
            <div className="burgerLines"></div>
          </div>

          <h1>Country</h1>
        </section>

        <div className="search-bar">
          <ion-icon className="searchIcon" name="search-outline"></ion-icon>
          <input
            onChange={searchHandler}
            name="search-input"
            placeholder="Search by country name"
          ></input>
        </div>
      </header>
      <Countries filteredCountries={countries} />
    </div>
  );
};

export default NavBar;
