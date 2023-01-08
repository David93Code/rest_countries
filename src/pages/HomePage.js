import NavBar from "../components/NavBar";
import Countries from "../components/Countries";
// import { useState } from "react";

const HomePage = ({ countries }) => {
  return (
    <div>
      <NavBar />
      <Countries countries={countries} />
    </div>
  );
};

export default HomePage;
