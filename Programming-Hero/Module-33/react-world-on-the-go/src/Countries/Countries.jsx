import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);

  const [countryVisited, setCountryVisited] = useState([]);

  const handleCountryVisited = (countryData) => {
    setCountryVisited([...countryVisited, countryData])
  };

  return (
    <>
      <h2 className={`title`}>In The countries: {countriesData.length}</h2>
      <p>
        I Visited: <span>{countryVisited.length}</span> Country
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
        {countriesData.map((countryData) => (
          <Country
            handleCountryVisited={handleCountryVisited}
            countryData={countryData}
            key={countryData.ccn3.ccn3}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
