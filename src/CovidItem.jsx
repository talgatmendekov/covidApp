import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const CovidItem = () => {
  const { selectedCountry } = useSelector((state) => state.stat);

  const maxRecoveries =
    selectedCountry.length !== 0 &&
    selectedCountry.reduce((acc, curr) =>
      acc.Recovered > curr.Recovered ? acc : curr
    );
  const newActive = selectedCountry[4]?.Confirmed - selectedCountry[3]?.Confirmed;
  console.log(newActive, "New Active");
  console.log(maxRecoveries);
  
  const day = new Date(maxRecoveries.Date).toLocaleString('en-Us', {day: '2-digit'}) ;
  const month = new Date(maxRecoveries.Date).toLocaleString('en-US', {month: 'long'}) ;
  return (
    <StyledSection>
      <div>
        {selectedCountry.map((country) => (
          <StyledTable>
            <tbody>
              <tr>
                <StyledDate>{new Date(country.Date).toDateString()}</StyledDate>
                <td>Active</td>
                <td>
                  <TableColumn>{country.Active}</TableColumn>
                </td>

                <td>Deaths</td>
                <td>
                  <TableColumn>{country.Deaths}</TableColumn>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Confirmed</td>
                <td>
                  <TableColumn>{country.Confirmed}</TableColumn>
                </td>

                <td>Recovered</td>
                <td>
                  <TableColumn>{country.Recovered}</TableColumn>
                </td>
              </tr>
            </tbody>
          </StyledTable>
        ))}
      </div>

      <RecoveredContainer>
        <p>Top recovered cases</p>
        <b>{maxRecoveries.Recovered}</b> <br />
        <span>{day}</span> <span>{month}</span>
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
const StyledDate = styled.td`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  padding: 2rem;
`;

const TableColumn = styled.div`
  background: #edf7ff;
  height: inherit;
  width: inherit;
  text-align: center;
  font-weight: 700;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
`;
const StyledTable = styled.table`
  width: 800px;
  height: 142px;
  margin: 1rem auto;
  background: #ffffff;
  border-radius: 20px;
  text-align: left;
  border-collapse: collapse;
`;
