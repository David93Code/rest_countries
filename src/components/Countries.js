import React from "react";
import "../css/countries.css";
import rightArrow from "../images/right-arrow.png";
import { Link } from "react-router-dom";

const Countries = ({ countries, filteredCountries }) => {
  return (
    <div className="countriesContainer">
      <section className="country">
        {/* <img src={country.flags.png} />
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
            </Link> */}

        <table style={{ width: "100%" }}>
          <tr className="countryHeadings">
            <td>Flag</td>
            <td>Name</td>
            <td>Region</td>
            <td>Population</td>
            <td>Languages</td>
          </tr>
          {filteredCountries?.map((country) => {
            return (
              <tr key={country.cca2} className="countryInfo">
                <td>
                  <img className="flags" src={country.flags.png} />
                </td>
                <td>{country.name.common}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>
                  {country.languages ? (
                    <ul>
                      {" "}
                      {Object.values(country.languages).map((language) => {
                        return <li key={language}>{language}</li>;
                      })}
                    </ul>
                  ) : null}
                </td>
                <td className="rightArrow">
                  {" "}
                  <Link to={"/" + country.cca2}>
                    <img style={{ width: "1rem" }} src={rightArrow} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
};

export default Countries;
