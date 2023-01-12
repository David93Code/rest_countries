import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import service from "./service/countries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    service.getAll().then((country) => {
      setCountries(country);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route
          path="/:countryId"
          element={<CountryPage countries={countries} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
