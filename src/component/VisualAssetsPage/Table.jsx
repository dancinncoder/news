import React from "react";
import styled from "styled-components";
import TableData from "../../mock-data/TableData.json";

const TableContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
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

function Table() {
  const tableDataList = TableData;

  return (
    <TableContainer>
      <InnerContainer>
        <h1>
          How average annual rents for a student room have risen in 5 British
          cities and towns
        </h1>
        <TableGrid
          columnsCount={2} // 1 for "City" + number of years
          rowsCount={tableDataList.length} // Number of cities
        >
          {/* Header row: Years */}
          <Cell header>City</Cell>
          {Object.keys(tableDataList[0])
            .filter((key) => key !== "city")
            .map((year, index) => (
              <Cell key={`header-${index}`} header>
                {year.replace("year", "Year ")}
              </Cell>
            ))}

          {/* Data rows */}
          {tableDataList.map((data, rowIndex) => (
            <>
              <Cell key={`city-${rowIndex}`} header={true}>
                {data.city}
              </Cell>
              {Object.keys(data)
                .filter((key) => key !== "city")
                .map((key, colIndex) => (
                  <Cell key={`data-${rowIndex}-${colIndex}`}>{data[key]}</Cell>
                ))}
            </>
          ))}
        </TableGrid>
      </InnerContainer>
      <InnerContainer>
        <h1>
          How average annual rents for a student room have risen in 5 British
          cities and towns
        </h1>
        <TableGrid
          columnsCount={2} // 1 for "City" + number of years
          rowsCount={tableDataList.length} // Number of cities
        >
          {/* Header row: Years */}
          <Cell header>City</Cell>
          {Object.keys(tableDataList[0])
            .filter((key) => key !== "city")
            .map((year, index) => (
              <Cell key={`header-${index}`} header>
                {year.replace("year", "Year ")}
              </Cell>
            ))}

          {/* Data rows */}
          {tableDataList.map((data, rowIndex) => (
            <>
              <Cell key={`city-${rowIndex}`} header={true}>
                {data.city}
              </Cell>
              {Object.keys(data)
                .filter((key) => key !== "city")
                .map((key, colIndex) => (
                  <Cell key={`data-${rowIndex}-${colIndex}`}>{data[key]}</Cell>
                ))}
            </>
          ))}
        </TableGrid>
      </InnerContainer>
    </TableContainer>
  );
}

export default Table;
