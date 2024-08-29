import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoAlbersUsa, geoPath } from "d3-geo";
import styled from "styled-components";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const stateAbbreviations = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

const ElectionContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 700px;
`;

const InnerContainer = styled.div`
  border: 1px solid red;
  max-width: 700px;
  height: 500px;
  display: flex;
  z-index: 9999;
  padding: 10px;
`;

const StyledGeography = styled(Geography)`
  outline: none;
  cursor: pointer;
`;

function ElectionMap() {
  const [selectedState, setSelectedState] = useState(null);

  // Create a geoPath generator to calculate centroids
  const pathGenerator = geoPath().projection(geoAlbersUsa());

  return (
    <ElectionContainer>
      <InnerContainer>
        <ComposableMap projection={geoAlbersUsa()}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { name } = geo.properties;
                const abbreviation = stateAbbreviations[name];

                // Calculate centroid and ensure it's valid
                const centroid = pathGenerator.centroid(geo);
                const isCentroidValid =
                  centroid[0] &&
                  centroid[1] &&
                  !isNaN(centroid[0]) &&
                  !isNaN(centroid[1]);

                return (
                  <React.Fragment key={geo.rsmKey}>
                    <StyledGeography
                      geography={geo}
                      onMouseEnter={() => {
                        console.log(`Mouse entered: ${name}`);
                      }}
                      onMouseLeave={() => {
                        console.log("Mouse left");
                      }}
                      onClick={() => {
                        setSelectedState(name);
                        console.log("Clicked state:", `${name}`);
                      }}
                      style={{
                        default: {
                          fill: selectedState === name ? "#F53" : "#E0E0E0",
                          stroke: "#FFFFFF", // State border color
                          strokeWidth: 0.75, // Border thickness
                        },
                        hover: {
                          fill: selectedState === name ? "#F53" : "#969696",
                          stroke: "#FFFFFF", // Maintain border color on hover
                          strokeWidth: 0.75,
                        },
                        pressed: {
                          fill: "#E42",
                          stroke: "none", // No border on click
                          strokeWidth: 0, // No border width on click
                        },
                      }}
                    />
                    {isCentroidValid && (
                      <text
                        x={centroid[0]}
                        y={centroid[1]}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="#000"
                        fontSize={10}
                        style={{ pointerEvents: "none" }} // To avoid text interfering with mouse events
                      >
                        {abbreviation}
                      </text>
                    )}
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
