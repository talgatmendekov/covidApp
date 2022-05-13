import React from "react";
import { useSelector } from "react-redux";
import { CovidItem } from './CovidItem'
import styled from "styled-components";

export const CovidList = () => {
  const { selectedCountry } = useSelector((state) => state.stat);

  const maxRecoveries =
    selectedCountry.length !== 0 &&
    selectedCountry.reduce((acc, curr) =>
      acc.Recovered > curr.Recovered ? acc : curr
    );
  const newActive = selectedCountry[4]?.Confirmed - selectedCountry[3]?.Confirmed;

  const day = new Date(maxRecoveries.Date).toLocaleString('en-Us', {day: '2-digit'}) ;
  const month = new Date(maxRecoveries.Date).toLocaleString('en-US', {month: 'long'}) ;
  
  return (
    <StyledSection>
      <div>
        {selectedCountry.map((country) => (
         <CovidItem key={country.Date} date={country.Date} active={country.Active}
         deaths={country.Deaths} confirmed={country.Confirmed} recovered={country.Recovered}  /> 
        ))}
      </div>

      <RecoveredContainer>
        <p>Top recovered cases</p>
        <b>{maxRecoveries.Recovered}</b> <br />
        <span>{day}</span> <span>{month}</span>
        <hr/>
        <p>New cases of COVID19</p>
        <b>{newActive}</b>
      </RecoveredContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
`;

const RecoveredContainer = styled.div`
  width: 380px;
  height: 450px;
  background: #1bbc9b;
  border-radius: 5px;
  margin: 1rem;
  p, span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #ffffff;
  }
  b {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 117px;
    color: #ffffff;
  }
`;
