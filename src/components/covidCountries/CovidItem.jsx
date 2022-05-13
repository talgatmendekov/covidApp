import React from 'react'
import styled from 'styled-components'

export const CovidItem = (props) => {
  return (
    <div>
         <StyledTable>
            <tbody>
              <tr>
                <StyledDate>{new Date(props.date).toLocaleString('en-Us', {day: '2-digit'})} {'  '}
                {new Date(props.date).toLocaleString('en-Us', {month: 'long'})}
                </StyledDate>
                <td>Active</td>
                <td>
                  <TableColumn>{props.active}</TableColumn>
                </td>

                <td>Deaths</td>
                <td>
                  <TableColumn>{props.deaths}</TableColumn>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Confirmed</td>
                <td>
                  <TableColumn>{props.confirmed}</TableColumn>
                </td>

                <td>Recovered</td>
                <td>
                  <TableColumn>{props.recovered}</TableColumn>
                </td>
              </tr>
            </tbody>
          </StyledTable>
    </div>
  )
}

const StyledDate = styled.td`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
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

