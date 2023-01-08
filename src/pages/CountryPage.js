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
    <div>
      <h1>Daniele on Pikku Runkarino</h1>
      <img src={country.flags?.png} />
      <h2>{country.name?.common}</h2>
      <p>{country?.capital}</p>
      <Link to="/">
        <p>back</p>
      </Link>
    </div>
  );
};

export default CountryPage;
