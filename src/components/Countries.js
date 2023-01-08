import "../css/countries.css";
import service from "../service/countries";
import rightArrow from "../images/right-arrow.png";
import { Link } from "react-router-dom";

const Countries = ({ countries, filteredCountries }) => {
  return (
    <div className="countriesContainer">
      {/* use html table */}
      <div className="titles">
        <h2>Flag</h2>
        <h2>Name</h2>
        <h2>Region</h2>
        <h2>Population</h2>
        <h2>Languages</h2>
      </div>

      {countries.map((country) => {
        return (
          <section key={country.cca2} className="country">
            <img src={country.flags.png} />
            <h2>{country.name.common}</h2>
            <p>{country.region}</p>
            <p>{country.population}</p>
            {country.languages ? (
              <ul>
                {" "}
                {Object.values(country.languages).map((language) => {
                  return <li key={language}>{language}</li>;
                })}
              </ul>
            ) : null}

            <Link to={"/" + country.cca2}>
              <img style={{ width: "1rem" }} src={rightArrow} />
            </Link>

            {/* <table style={{ width: "100%" }}>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Population</th>
            <th>Languages</th>
          </tr>
        </table> */}
          </section>
        );
      })}
    </div>
  );
};

export default Countries;
