import React from "react";
import styled from "styled-components";
import TableData from "../../mock-data/TableData.json";
import TableCoffeeData from "../../mock-data/TableDataCoffee.json";

const TableContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 600px) {
    max-width: 750px;
    flex-direction: row;
  }

  @media (min-width: 800px) {
    max-width: 900px;
  }

  @media (min-width: 1150px) {
    max-width: 1000px;
  }

  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 35% repeat(${(props) => props.columnsCount}, 1fr);
  grid-template-rows: auto repeat(${(props) => props.rowsCount}, 1fr);
  gap: 1px;
  background-color: #ccc;
  width: 100%;
`;

const Cell = styled.div`
  padding: 5px;
  background-color: #fff;
  text-align: center;
  font-weight: ${({ header }) => (header ? "bold" : "normal")};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 600px) {
    font-size: 14px;
  }
`;

const Comment = styled.p`
  text-align: right;
  width: 100%;
  font-size: 10px;
  color: var(gray);
`;

function Table() {
  const tableDataList = TableData;
  const tableCoffeeDataList = TableCoffeeData;

  // Function to remove 'million bags' from the data
  const cleanData = (value) => value.replace(" million bags", "");

  return (
    <TableContainer>
      <InnerContainer>
        <h1>
          How average annual rents for a student room have risen in 5 British
          cities and towns
        </h1>
        <TableGrid columnsCount={2} rowsCount={tableDataList.length}>
          <Cell header>City</Cell>
          {Object.keys(tableDataList[0])
            .filter((key) => key !== "city")
            .map((year, index) => (
              <Cell key={`header-${index}`} header>
                {year.replace("year", "Year ")}
              </Cell>
            ))}
          {tableDataList.map((data, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              <Cell key={`city-${rowIndex}`} header>
                {data.city}
              </Cell>
              {Object.keys(data)
                .filter((key) => key !== "city")
                .map((key, colIndex) => (
                  <Cell key={`data-${rowIndex}-${colIndex}`}>{data[key]}</Cell>
                ))}
            </React.Fragment>
          ))}
        </TableGrid>
      </InnerContainer>

      <InnerContainer>
        <h1>{tableCoffeeDataList.tableName}</h1>
        <Comment>** million bags</Comment>
        <TableGrid columnsCount={4} rowsCount={tableCoffeeDataList.data.length}>
          <Cell header>Country</Cell>
          {Object.keys(tableCoffeeDataList.data[0])
            .filter((key) => key !== "country")
            .map((year, index) => (
              <Cell key={`header-${index}`} header>
                {year.replace("year_", "Year ")}
              </Cell>
            ))}
          {tableCoffeeDataList.data.map((data, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              <Cell key={`country-${rowIndex}`} header>
                {data.country}
              </Cell>
              {Object.keys(data)
                .filter((key) => key !== "country")
                .map((key, colIndex) => (
                  <Cell key={`data-${rowIndex}-${colIndex}`}>
                    {cleanData(data[key])}
                  </Cell>
                ))}
            </React.Fragment>
          ))}
        </TableGrid>
      </InnerContainer>
    </TableContainer>
  );
}

export default Table;
