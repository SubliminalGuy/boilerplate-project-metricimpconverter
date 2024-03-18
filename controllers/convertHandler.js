function ConvertHandler() {
  const unitTable = {
    gal: "L",
    l: "gal",
    mi: "km",
    km: "mi",
    lbs: "kg",
    kg: "lbs",
  };

  const spellOutTable = {
    gal: "gallons",
    l: "liters",
    mi: "miles",
    km: "kilometers",
    lbs: "pounds",
    kg: "kilograms",
  };

  this.getNum = function (input) {
    let regex = /\d+([./]\d+)?([./]\d+)*/;
    let result = input.match(regex);
    if (result === null) {
      result = 0;
    } else {
      result = result[0];
    }
    return result;
  };

  this.getUnit = function (input) {
    let regex = /[a-z]+/i;
    let result;

    if (input.match(regex) !== null) {
      result = input.match(regex)[0];
    } else {
      result = "invalid unit";
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let submittedUnit = this.getUnit(initUnit.toLowerCase());

    return unitTable[submittedUnit];
  };

  this.spellOutUnit = function (input) {
    const unit = this.getUnit(input);
    if (unit === "No Unit Found") {
      return "No Unit Found";
    } else {
      return spellOutTable[unit.toLowerCase()];
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
