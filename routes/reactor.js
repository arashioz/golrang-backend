let express = require("express");
let router = express.Router();
let axios = require("axios");
const ReactorModel = require("../schema/reactor");

const getDataFromGolrang = new Promise((resolve, reject) => {
  setInterval(() => {
    axios
      .get(
        `http://81.16.112.105:8089/getPeriodCoolingTemperature/R002/99000`
      )
      .then((response) => {
        resolve(response.data.length);
      });
  }, 5000);
});

setInterval(() => {
  getDataFromGolrang.then((result) => {
    console.log(result);
  });
}, 7000);

router.get("/", (req, res) => {
  console.log(g);

  let setReactor = new ReactorModel({ entryTemperature1: "2" });
  setReactor.save();
});

module.exports = router;
