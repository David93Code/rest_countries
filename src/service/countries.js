import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/";

const getAll = () => {
  const request = axios.get(baseUrl + "all");
  return request.then((response) => response.data);
};

const getCountry = (countryId) => {
  const request = axios.get(`${baseUrl}alpha/${countryId}`);
  return request.then((response) => response.data);
};

const service = { getAll, getCountry };

export default service;
