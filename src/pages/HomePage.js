import NavBar from "../components/NavBar";
import Countries from "../components/Countries";

const HomePage = ({ countries }) => {
  return (
    <div>
      <NavBar countries={countries}/>
      <Countries countries={countries} />
    </div>
  );
};

export default HomePage;
