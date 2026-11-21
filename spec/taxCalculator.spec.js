const { calculateTax, calculateNetIncome } = require("../taxCalculator");

describe("Tax Calculator", function () {
  it("1. returns 0 tax when income is 0", function () {
    expect(calculateTax(0)).toBe(0);
  });

  it("2. returns 0 tax for income in the lowest bracket (up to 10000)", function () {
    expect(calculateTax(10000)).toBe(0);
  });

  it("3. calculates 10% tax above 10000 in the middle bracket", function () {
    expect(calculateTax(30000)).toBe(2000);
  });

  it("4. calculates progressive tax in the upper bracket (above 50000)", function () {
    expect(calculateTax(80000)).toBe(10000);
  });

  it("5. calculates net income after deducting tax", function () {
    expect(calculateNetIncome(30000)).toBe(28000);
  });

  it("6. throws an error for negative income", function () {
    expect(function () {
      calculateTax(-500);
    }).toThrowError("Income cannot be negative");
  });

  it("7. throws an error for non-numeric income", function () {
    expect(function () {
      calculateTax("abc");
    }).toThrowError("Income must be a valid number");
  });
});
