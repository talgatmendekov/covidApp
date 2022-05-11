import React from "react";
import styled from "styled-components";

export const CovidItem = ({ selected }) => {
  console.log(selected);
  return (
    <StyledSection>
      {selected.map((country) => (
        <StyledTable>
          <tbody>
            <tr>
              <StyledDate>{country.Date}</StyledDate>
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
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  margin: 2rem auto;
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
  height: 2em;
  width: 2rem;
  text-align: center;
  font-weight: 700;
  border-radius: 5px;
  padding: 0;
  margin: 0;
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
