const qs = require("qs");
const query = qs.stringify(
  {
    populate: {
      foods: { populate: ["photos"] },
      district: { populate: "*" },
    },
  },
  {
    encodeValuesOnly: true,
  }
);

console.log(`http://localhost:1337/api/restaurants?${query}`);
