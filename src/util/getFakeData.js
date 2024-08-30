// fakedata.js
const electoralVotes = {
  Alabama: 9,
  Alaska: 3,
  Arizona: 11,
  Arkansas: 6,
  California: 55,
  Colorado: 10,
  Connecticut: 7,
  Delaware: 3,
  Florida: 29,
  Georgia: 16,
  Hawaii: 4,
  Idaho: 4,
  Illinois: 19,
  Indiana: 11,
  Iowa: 6,
  Kansas: 6,
  Kentucky: 8,
  Louisiana: 8,
  Maine: 4,
  Maryland: 10,
  Massachusetts: 11,
  Michigan: 16,
  Minnesota: 10,
  Mississippi: 6,
  Missouri: 10,
  Montana: 3,
  Nebraska: 5,
  Nevada: 6,
  "New Hampshire": 4,
  "New Jersey": 14,
  "New Mexico": 5,
  "New York": 28,
  "North Carolina": 15,
  "North Dakota": 3,
  Ohio: 17,
  Oklahoma: 7,
  Oregon: 8,
  Pennsylvania: 20,
  "Rhode Island": 4,
  "South Carolina": 9,
  "South Dakota": 3,
  Tennessee: 11,
  Texas: 40,
  Utah: 6,
  Vermont: 3,
  Virginia: 13,
  Washington: 12,
  "West Virginia": 4,
  Wisconsin: 10,
  Wyoming: 3,
};

const generateFakeData = (electoralVotes) => {
  const states = Object.keys(electoralVotes);

  const initialData = states.reduce((acc, state) => {
    acc[state] = {
      Biden: 0,
      Trump: 0,
    };
    return acc;
  }, {});

  const incrementVotes = (data, increments) => {
    return Object.keys(data).reduce((acc, state) => {
      const increment = increments[state] || { Biden: 0, Trump: 0 };
      acc[state] = {
        Biden: Math.floor((data[state].Biden || 0) + increment.Biden),
        Trump: Math.floor((data[state].Trump || 0) + increment.Trump),
      };
      return acc;
    }, {});
  };

  return {
    "9AM": incrementVotes(initialData, {
      Alabama: { Biden: 1, Trump: 1 },
      Alaska: { Biden: 1, Trump: 1 },
      Arizona: { Biden: 2, Trump: 2 },
      Arkansas: { Biden: 1, Trump: 1 },
      California: { Biden: 3, Trump: 2 },
      Colorado: { Biden: 1, Trump: 1 },
      Connecticut: { Biden: 1, Trump: 1 },
      Delaware: { Biden: 1, Trump: 1 },
      Florida: { Biden: 2, Trump: 2 },
      Georgia: { Biden: 2, Trump: 2 },
      Hawaii: { Biden: 1, Trump: 1 },
      Idaho: { Biden: 1, Trump: 1 },
      Illinois: { Biden: 3, Trump: 2 },
      Indiana: { Biden: 2, Trump: 1 },
      Iowa: { Biden: 1, Trump: 1 },
      Kansas: { Biden: 1, Trump: 1 },
      Kentucky: { Biden: 1, Trump: 1 },
      Louisiana: { Biden: 1, Trump: 1 },
      Maine: { Biden: 1, Trump: 1 },
      Maryland: { Biden: 2, Trump: 1 },
      Massachusetts: { Biden: 2, Trump: 1 },
      Michigan: { Biden: 2, Trump: 2 },
      Minnesota: { Biden: 2, Trump: 1 },
      Mississippi: { Biden: 1, Trump: 1 },
      Missouri: { Biden: 2, Trump: 1 },
      Montana: { Biden: 1, Trump: 1 },
      Nebraska: { Biden: 1, Trump: 1 },
      Nevada: { Biden: 1, Trump: 1 },
      "New Hampshire": { Biden: 1, Trump: 1 },
      "New Jersey": { Biden: 2, Trump: 1 },
      "New Mexico": { Biden: 1, Trump: 1 },
      "New York": { Biden: 3, Trump: 2 },
      "North Carolina": { Biden: 2, Trump: 1 },
      "North Dakota": { Biden: 1, Trump: 1 },
      Ohio: { Biden: 2, Trump: 2 },
      Oklahoma: { Biden: 1, Trump: 1 },
      Oregon: { Biden: 1, Trump: 1 },
      Pennsylvania: { Biden: 2, Trump: 2 },
      "Rhode Island": { Biden: 1, Trump: 1 },
      "South Carolina": { Biden: 1, Trump: 1 },
      "South Dakota": { Biden: 1, Trump: 1 },
      Tennessee: { Biden: 2, Trump: 1 },
      Texas: { Biden: 3, Trump: 2 },
      Utah: { Biden: 1, Trump: 1 },
      Vermont: { Biden: 1, Trump: 1 },
      Virginia: { Biden: 2, Trump: 1 },
      Washington: { Biden: 2, Trump: 1 },
      "West Virginia": { Biden: 1, Trump: 1 },
      Wisconsin: { Biden: 2, Trump: 1 },
      Wyoming: { Biden: 1, Trump: 1 },
    }),
    "12PM": incrementVotes(initialData, {
      Alabama: { Biden: 2, Trump: 2 },
      Alaska: { Biden: 1, Trump: 1 },
      Arizona: { Biden: 3, Trump: 3 },
      Arkansas: { Biden: 2, Trump: 2 },
      California: { Biden: 4, Trump: 3 },
      Colorado: { Biden: 2, Trump: 2 },
      Connecticut: { Biden: 2, Trump: 2 },
      Delaware: { Biden: 1, Trump: 1 },
      Florida: { Biden: 3, Trump: 2 },
      Georgia: { Biden: 2, Trump: 2 },
      Hawaii: { Biden: 1, Trump: 1 },
      Idaho: { Biden: 1, Trump: 1 },
      Illinois: { Biden: 4, Trump: 3 },
      Indiana: { Biden: 2, Trump: 2 },
      Iowa: { Biden: 2, Trump: 2 },
      Kansas: { Biden: 1, Trump: 1 },
      Kentucky: { Biden: 2, Trump: 2 },
      Louisiana: { Biden: 2, Trump: 2 },
      Maine: { Biden: 1, Trump: 1 },
      Maryland: { Biden: 3, Trump: 2 },
      Massachusetts: { Biden: 3, Trump: 2 },
      Michigan: { Biden: 3, Trump: 3 },
      Minnesota: { Biden: 2, Trump: 2 },
      Mississippi: { Biden: 1, Trump: 1 },
      Missouri: { Biden: 2, Trump: 2 },
      Montana: { Biden: 1, Trump: 1 },
      Nebraska: { Biden: 2, Trump: 1 },
      Nevada: { Biden: 2, Trump: 1 },
      "New Hampshire": { Biden: 1, Trump: 1 },
      "New Jersey": { Biden: 3, Trump: 2 },
      "New Mexico": { Biden: 2, Trump: 1 },
      "New York": { Biden: 4, Trump: 3 },
      "North Carolina": { Biden: 2, Trump: 2 },
      "North Dakota": { Biden: 1, Trump: 1 },
      Ohio: { Biden: 3, Trump: 3 },
      Oklahoma: { Biden: 1, Trump: 1 },
      Oregon: { Biden: 2, Trump: 2 },
      Pennsylvania: { Biden: 3, Trump: 2 },
      "Rhode Island": { Biden: 1, Trump: 1 },
      "South Carolina": { Biden: 2, Trump: 2 },
      "South Dakota": { Biden: 1, Trump: 1 },
      Tennessee: { Biden: 2, Trump: 2 },
      Texas: { Biden: 4, Trump: 3 },
      Utah: { Biden: 1, Trump: 1 },
      Vermont: { Biden: 1, Trump: 1 },
      Virginia: { Biden: 3, Trump: 2 },
      Washington: { Biden: 2, Trump: 2 },
      "West Virginia": { Biden: 1, Trump: 1 },
      Wisconsin: { Biden: 2, Trump: 2 },
      Wyoming: { Biden: 1, Trump: 1 },
    }),
    "3PM": incrementVotes(initialData, {
      Alabama: { Biden: 3, Trump: 2 },
      Alaska: { Biden: 2, Trump: 2 },
      Arizona: { Biden: 4, Trump: 3 },
      Arkansas: { Biden: 3, Trump: 2 },
      California: { Biden: 5, Trump: 4 },
      Colorado: { Biden: 3, Trump: 2 },
      Connecticut: { Biden: 3, Trump: 2 },
      Delaware: { Biden: 2, Trump: 2 },
      Florida: { Biden: 4, Trump: 3 },
      Georgia: { Biden: 3, Trump: 3 },
      Hawaii: { Biden: 1, Trump: 1 },
      Idaho: { Biden: 2, Trump: 2 },
      Illinois: { Biden: 5, Trump: 4 },
      Indiana: { Biden: 3, Trump: 2 },
      Iowa: { Biden: 2, Trump: 2 },
      Kansas: { Biden: 2, Trump: 2 },
      Kentucky: { Biden: 3, Trump: 2 },
      Louisiana: { Biden: 3, Trump: 2 },
      Maine: { Biden: 2, Trump: 2 },
      Maryland: { Biden: 4, Trump: 3 },
      Massachusetts: { Biden: 4, Trump: 3 },
      Michigan: { Biden: 4, Trump: 3 },
      Minnesota: { Biden: 3, Trump: 2 },
      Mississippi: { Biden: 2, Trump: 2 },
      Missouri: { Biden: 3, Trump: 2 },
      Montana: { Biden: 2, Trump: 2 },
      Nebraska: { Biden: 2, Trump: 2 },
      Nevada: { Biden: 2, Trump: 2 },
      "New Hampshire": { Biden: 2, Trump: 2 },
      "New Jersey": { Biden: 4, Trump: 3 },
      "New Mexico": { Biden: 2, Trump: 2 },
      "New York": { Biden: 5, Trump: 4 },
      "North Carolina": { Biden: 3, Trump: 3 },
      "North Dakota": { Biden: 2, Trump: 2 },
      Ohio: { Biden: 4, Trump: 3 },
      Oklahoma: { Biden: 2, Trump: 2 },
      Oregon: { Biden: 3, Trump: 2 },
      Pennsylvania: { Biden: 4, Trump: 3 },
      "Rhode Island": { Biden: 2, Trump: 2 },
      "South Carolina": { Biden: 2, Trump: 2 },
      "South Dakota": { Biden: 2, Trump: 2 },
      Tennessee: { Biden: 3, Trump: 2 },
      Texas: { Biden: 5, Trump: 4 },
      Utah: { Biden: 2, Trump: 2 },
      Vermont: { Biden: 1, Trump: 1 },
      Virginia: { Biden: 4, Trump: 3 },
      Washington: { Biden: 3, Trump: 2 },
      "West Virginia": { Biden: 2, Trump: 2 },
      Wisconsin: { Biden: 3, Trump: 2 },
      Wyoming: { Biden: 2, Trump: 2 },
    }),
    "6PM": incrementVotes(initialData, {
      Alabama: { Biden: 4, Trump: 3 },
      Alaska: { Biden: 3, Trump: 3 },
      Arizona: { Biden: 5, Trump: 4 },
      Arkansas: { Biden: 4, Trump: 3 },
      California: { Biden: 6, Trump: 5 },
      Colorado: { Biden: 4, Trump: 3 },
      Connecticut: { Biden: 4, Trump: 3 },
      Delaware: { Biden: 3, Trump: 3 },
      Florida: { Biden: 5, Trump: 4 },
      Georgia: { Biden: 4, Trump: 4 },
      Hawaii: { Biden: 2, Trump: 1 },
      Idaho: { Biden: 3, Trump: 2 },
      Illinois: { Biden: 6, Trump: 5 },
      Indiana: { Biden: 4, Trump: 3 },
      Iowa: { Biden: 3, Trump: 2 },
      Kansas: { Biden: 3, Trump: 2 },
      Kentucky: { Biden: 4, Trump: 3 },
      Louisiana: { Biden: 4, Trump: 3 },
      Maine: { Biden: 3, Trump: 2 },
      Maryland: { Biden: 5, Trump: 4 },
      Massachusetts: { Biden: 5, Trump: 4 },
      Michigan: { Biden: 5, Trump: 4 },
      Minnesota: { Biden: 4, Trump: 3 },
      Mississippi: { Biden: 3, Trump: 2 },
      Missouri: { Biden: 4, Trump: 3 },
      Montana: { Biden: 3, Trump: 2 },
      Nebraska: { Biden: 3, Trump: 2 },
      Nevada: { Biden: 3, Trump: 2 },
      "New Hampshire": { Biden: 3, Trump: 2 },
      "New Jersey": { Biden: 5, Trump: 4 },
      "New Mexico": { Biden: 3, Trump: 2 },
      "New York": { Biden: 6, Trump: 5 },
      "North Carolina": { Biden: 4, Trump: 4 },
      "North Dakota": { Biden: 3, Trump: 2 },
      Ohio: { Biden: 5, Trump: 4 },
      Oklahoma: { Biden: 3, Trump: 2 },
      Oregon: { Biden: 4, Trump: 3 },
      Pennsylvania: { Biden: 5, Trump: 4 },
      "Rhode Island": { Biden: 3, Trump: 2 },
      "South Carolina": { Biden: 3, Trump: 2 },
      "South Dakota": { Biden: 3, Trump: 2 },
      Tennessee: { Biden: 4, Trump: 3 },
      Texas: { Biden: 6, Trump: 5 },
      Utah: { Biden: 3, Trump: 2 },
      Vermont: { Biden: 2, Trump: 1 },
      Virginia: { Biden: 5, Trump: 4 },
      Washington: { Biden: 4, Trump: 3 },
      "West Virginia": { Biden: 3, Trump: 2 },
      Wisconsin: { Biden: 4, Trump: 3 },
      Wyoming: { Biden: 3, Trump: 2 },
    }),
  };
};

export const fakeData = generateFakeData(electoralVotes);
