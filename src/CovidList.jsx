import React, { useState } from "react";
import { Spinner } from "./components/UI/Spinner/Spinner";
import { CovidItem } from "./CovidItem";
import styled from "styled-components";
import { setToLocalStorage } from "./utils/helpers/localStorage";

export const CovidList = ({ countries }) => {
  const [selectedCountryData, setSelectedCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = (country) => {
    setIsLoading(true);

    try {
      const fetchSelectedCountryData = async () => {
        const response = await fetch(
          `https://api.covid19api.com/total/dayone/country/${country}`
        );
        if (response.ok) {
          setIsLoading(false);
        } else {
          throw new Error("Something went wrong");
        }
        const selectedCountryData = await response.json();
        console.log(selectedCountryData);
        setSelectedCountryData(selectedCountryData);
      };
      fetchSelectedCountryData();
      setToLocalStorage(selectedCountryData);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <form>
        <StyledSelect onClick={(e) => fetchDataHandler(e.target.value)}>
          {countries.map((country) => (
            <option key={country.Slug} value={country.Country}>
              {country.Country}
            </option>
          ))}
        </StyledSelect>
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <CovidItem selected={selectedCountryData} />
          )}
          {error}
        </div>
      </form>
    </div>
  );
};

const StyledSelect = styled.select`
  width: 360px;
  height: 61px;
  font-size: 22px;
  font-family: Roboto;
  font-weight: 500;
  background: #ffffff;
  border-radius: 5px;
`;
