var express = require("express");
var router = express.Router();

let city = [
    {city: "Cebu", postcode: 6000}, 
    {city: "Manila", postcode: 1000}, 
    {city: "Davao", postcode: 8000}, 
    {city: "Makati", postcode: 1200},
    {city: "Quezon City", postcode: 1008},
    {city:"Iloilo", postcode: 5000},
    {city:"CDO", postcode: 9000},
    {city:"Bacolod", postcode: 6100},
    {city:"Zamboanga", postcode: 7025}
];

router.get("/", (req, res, next) => {
    res.send(city);
});

module.exports = router;