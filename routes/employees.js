var express = require("express");
var router = express.Router();

let employees = [
    {name: "Oliver Queen", title: "CEO", gender: "male", age: 38, languages: ["english", "spanish"]}, 
    {name: "Ben Hur", title: "Security consultant", gender: "male", age: 25, languages: ["latin", "italian"]}, 
    {name: "Jessica Alba", title: "Admin Assistant", gender: "female", age: 23, languages: ["english", "spanish"]}, 
    {name: "Pepper Piper", title: "Quality Assurance", gender: "female", age: 32, languages: ["english", "spanish"]},
    {name: "Red Sullivan", title: "Project Manager", gender: "male", age: 27, languages: ["russian", "english"]},
    {name:"Juan Dela Cruz", title: "Manager", age: 24, gender: "male", languages: ["russian", "french"]},
    {name:"Anna Salvador", title: "Junior Dev", age: 21, gender: "female", languages: ["english", "french"]},
    {name:"Mark Bautista", title: "Senior Fullstack Dev", age: 28, gender: "male", languages: ["russion", "spanish"]},
    {name:"Micheal Garcia", title: "CEO", age: 40, gender: "male", languages: ["english", "latin"]}
];

router.get("/", (req, res, next) => {
    res.send(employees);
});

module.exports = router;