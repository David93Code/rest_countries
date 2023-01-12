import React from "react";
import "../css/countries.css";
import rightArrow from "../images/right-arrow.png";
import { Link } from "react-router-dom";

const Countries = ({ filteredCountries }) => {
  return (
    <div className="countriesContainer">
      <section className="country">
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="countryTableHeadings">
              <td className="flagText">Flag</td>
              <td>Name</td>
              <td>Region</td>
              <td>Population</td>
              <td colSpan={2}>Languages</td>
            </tr>
          </thead>
          <tbody className="countryTableBody">
            {filteredCountries?.map((country) => {
              return (
                <tr key={country.cca2} className="countryInfo">
                  <td>
                    <img
                      className="flags"
                      src={country.flags.png}
                      alt="country flag"
                    />
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
                      <img
                        style={{ width: "1rem" }}
                        src={rightArrow}
                        alt="arrow to the right"
                      />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Countries;
