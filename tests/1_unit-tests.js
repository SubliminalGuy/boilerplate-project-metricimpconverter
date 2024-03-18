const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

//console.log(convertHandler.getUnit("12"));

suite("Unit Tests", function () {
  suite("Basic Assertions", function () {
    test("Whole Number Test", function () {
      assert.equal(
        convertHandler.getNum("12"),
        "12",
        "When a number is being entered, the getNum-Functioon returns a number"
      );
      assert.equal(
        convertHandler.getUnit("12"),
        "invalid unit",
        "When just a number is being entered, the getUnit-Function returns the string 'invalid unit"
      );
    });
  });
});
