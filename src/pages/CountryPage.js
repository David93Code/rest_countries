import { Link } from "react-router-dom";
import service from "../service/countries";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import leftArrow from "../images/left-arrow.png";
import map from "../images/map.png";
import kebabMenu from "../images/kebabMenu.png";
import downArrow from "../images/down-arrow.png";
import "../css/countryPage.css";

const CountryPage = (countries) => {
  const [country, setCountry] = useState([]);
  const { countryId } = useParams();

  useEffect(() => {
    service.getCountry(countryId).then((country) => {
      setCountry(country[0]);
      console.log(country[0]);
    });
  }, [countryId]);

  return (
    <div className="countryPageCardContainer">
      <section className="countryCardHeader">
        <p className="countryInitialLetter">{country.name?.common[0]}</p>
        <div className="name-and-capital">
          <h2>{country.name?.common}</h2>
          <p>{country?.capital}</p>
        </div>
        <img className="kebab" src={kebabMenu} />
      </section>

      <section className="imageAndText">
        <img className="flag" src={country.flags?.png} />
        <p>
          The country belongs to{" "}
          <span className="apiText">{country.region}</span> region and{" "}
          <span className="apiText">{country.subregion}</span> subregion.
          <br />
          Located at the{" "}
          <span className="apiText">
            {country.latlng?.slice(country.latlng, country.latlng.indexOf(","))}
          </span>{" "}
          °N and{" "}
          <span className="apiText">
            {country.latlng?.slice(country.latlng.indexOf(","))}
          </span>{" "}
          °W, this country has population of{" "}
          <span className="apiText">{country.population}</span> <br />
          and it has {country.independent === false ? (
            <span>not</span>
          ) : null}{" "}
          gained the independent, according to the CIA World Factbook.
        </p>
      </section>
      <section className="links">
        <div className="back-and-map">
          <Link to="/">
            <img
              className="leftArrow"
              style={{ width: "1rem" }}
              src={leftArrow}
            />
          </Link>
          <a
            href={`https://www.google.com/maps/place/${country.name?.common}`}
            target="_blank"
          >
            <img style={{ width: "1rem" }} src={map} />
          </a>
        </div>

        <img className="downArrow" style={{ width: "1rem" }} src={downArrow} />
      </section>
    </div>
  );
};

export default CountryPage;
