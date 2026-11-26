import React, { useState } from "react";
import "./Country.css";

const Country = ({ countryData, handleCountryVisited }) => {   
    

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);    
        handleCountryVisited(countryData);
    }

  return (
    <>
      <div className={`country ${visited ? 'country-visited' : ''}`}>
        <img src={countryData.flags.flags.png} alt="" />

        <div>
          <h2>Name: {countryData.name.common}</h2>
          <p>Population: {countryData.population.population}</p>
          <button onClick={handleVisited} style={{marginTop:'12px'}}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
      </div>
    </>
  );
};

export default Country;
