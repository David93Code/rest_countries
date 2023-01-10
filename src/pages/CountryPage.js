import { Link } from "react-router-dom";
import service from "../service/countries";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import leftArrow from "../images/left-arrow.png";
import map from "../images/map.png";

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
        <p>{country.name?.common[0]}</p>
        <h2>{country.name?.common}</h2>
        <p>{country?.capital}</p>
      </section>

      <section className="imageAndText">
        <img src={country.flags?.png} />
        <p>
          The country belongs to {country.region} region and {country.subregion}{" "}
          subregion.
          <br />
          Located at the {country.latlng?.slice(country.latlng, country.latlng.indexOf(","))} °N and{" "}
          {country.latlng?.slice(
            country.latlng.indexOf(",")
          )} {" "}
           °W, this country has population of {country.population} <br />
          and it has {country.independent === false ? (
            <span>not</span>
          ) : null}{" "}
          gained the independent, according to the CIA World Factbook.
        </p>
      </section>
      <section className="links">
      <Link to="/">
      <img style={{ width: "1rem" }} src={leftArrow} />
      </Link>
     <a href={`https://www.google.com/maps/place/${country.name?.common}`} target="_blank">
      <img style={{ width: "1rem" }} src={map} />
      </a>
      </section>
    </div>
  );
};

export default CountryPage;
