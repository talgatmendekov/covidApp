import React, { useState } from "react";
import { Spinner } from "../UI/Spinner/Spinner";
import { CovidList } from "./CovidList";
import styled from "styled-components";
import { setToLocalStorage } from "../../utils/helpers/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { statActions } from "../../store/statSlice";
import { API_SELECTED_COUNTRY } from "../../utils/constants/general";

export const CountrySelect = () => {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state.stat);
  const { selectedCountry } = useSelector((state) => state.stat);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = (country) => {
    setIsLoading(true);

    try {
      const fetchSelectedCountryData = async () => {
        const response = await fetch(
          `${API_SELECTED_COUNTRY}/${country}`
        );
        if (response.ok) {
          setIsLoading(false);
        } else {
          throw new Error("Something went wrong");
        }
        const selectedCountryData = await response.json();
        const lastFiveDays = selectedCountryData.slice(-5);
        setToLocalStorage("selectedCountry", lastFiveDays);
        dispatch(statActions.showSelectedCountry(lastFiveDays));
      };
      fetchSelectedCountryData();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <MainContainer>
      <form>
        <StyledSelect
          onClick={(e) => fetchDataHandler(e.target.value)}
          defaultValue="Kyrgyzstan"
        >
          <option>{selectedCountry[0]?.Country || "Select country"}</option>
          {allCountries.map((country) => (
            <option
              key={country.Slug}
              value={country.Country}
              selected="Kyrgyzstan"
            >
              {country.Country}
            </option>
          ))}
        </StyledSelect>
        <div>
          {isLoading ? <Spinner /> : <CovidList />}
          {error}
        </div>
      </form>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
const StyledSelect = styled.select`
  width: 360px;
  height: 61px;
  font-size: 22px;
  font-family: Roboto;
  font-weight: 500;
  background: #ffffff;
  border-radius: 5px;
`;
