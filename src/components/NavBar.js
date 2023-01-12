import Countries from "./Countries";

import "../css/navBar.css";

const NavBar = ({ countries, setSearchInput, setCurrentPage }) => {
  let searchHandler = (e) => {
    setSearchInput(e.target.value.toLowerCase());
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
