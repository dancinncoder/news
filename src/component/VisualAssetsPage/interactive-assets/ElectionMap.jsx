import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoAlbersUsa, geoPath } from "d3-geo";
import styled from "styled-components";
import stateAbbreviations from "../../../mock-data/StateAbbreviations.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Styled components
const ElectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 900px;

  @media (min-width: 1280px) {
    height: 550px;
    align-items: flex-end;
  }
`;

const InnerContainer = styled.div`
  max-width: 650px;
  height: 500px;
  display: flex;
  z-index: 9999;
  padding: 10px;
  margin-right: 100px;
`;

const StyledGeography = styled(Geography)`
  outline: none;
  cursor: pointer;
`;

// Create a mapping of state names to abbreviations
const stateAbbrMap = Object.entries(stateAbbreviations).reduce(
  (acc, [stateName, abbr]) => {
    acc[stateName] = abbr;
    return acc;
  },
  {}
);

function ElectionMap({ data }) {
  // Color scale based on data
  const colorScale = (state) => {
    const stateData = data[state];
    if (!stateData) return "#f0f0f0"; // Light gray for Undecided

    // Determine color based on the leaning of the state
    return stateData.Biden > stateData.Trump ? "#3498db" : "#e74c3c";
  };

  const projection = geoAlbersUsa();
  const pathGenerator = geoPath().projection(projection);

  return (
    <ElectionContainer>
      <InnerContainer>
        <ComposableMap projection={projection}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateName = geo.properties.name;
                const stateAbbr = stateAbbrMap[stateName] || stateName;

                // Calculate centroid with a fallback value if needed
                let centroidX = 0;
                let centroidY = 0;
                try {
                  [centroidX, centroidY] = pathGenerator.centroid(geo);
                } catch (e) {
                  console.error(
                    `Error calculating centroid for ${stateName}:`,
                    e
                  );
                }

                // Ensure centroid coordinates are valid numbers
                if (isNaN(centroidX) || isNaN(centroidY)) {
                  return null; // Skip rendering if coordinates are invalid
                }

                return (
                  <React.Fragment key={geo.rsmKey}>
                    <StyledGeography
                      geography={geo}
                      fill={colorScale(stateName)}
                      stroke="#fff"
                    />
                    <text
                      x={centroidX}
                      y={centroidY}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize={15}
                      dy={4}
                    >
                      {stateAbbr}
                    </text>
                  </React.Fragment>
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </InnerContainer>
    </ElectionContainer>
  );
}

export default ElectionMap;
