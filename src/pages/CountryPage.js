import { Link } from "react-router-dom";
import service from "../service/countries";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";

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
          Located at the {country.latlng} °N and &nbsp;{" "}
          {country.latlng?.slice(
            country.latlng.indexOf(","),
            country.latlng.length
          )}
          °W, this country has population of {country.population} <br />
          and it has {country.independent === false ? (
            <span>not</span>
          ) : null}{" "}
          gained the independent, according to the CIA World Factbook.
        </p>
      </section>
      <Link to="/">
        <p>back</p>
      </Link>
    </div>
  );
};

export default CountryPage;
