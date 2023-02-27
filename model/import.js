const db = require("../model/helper");
const fs = require("fs");
var path = require("path");
const papa = require("papaparse");
const data = fs.readFileSync(
  path.join(__dirname, "../data/footprints_clean.csv"),
  {
    encoding: "utf8",
    flag: "r",
  }
);

const parsed = papa.parse(data, {
  header: true,
});

async function process() {
    for (const item of parsed.data) {
        const query = `INSERT INTO food_emi_data (food_item, emi_kg, emi_port, food_cat)
        VALUES (
          "${item["Food item "]}",
          "${item["Emissions per kilogram"].replace(",", ".")}",
          "${item["Emissions by portion"].replace(",", ".")}",
          "${item["Food category"]}");`;
        //   console.log(query);
       await db(query);
      }
}

process()


// Display the file data
// console.log(parsed);