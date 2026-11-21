function calculateTax(income) {
  if (typeof income !== "number" || Number.isNaN(income)) {
    throw new Error("Income must be a valid number");
  }
  if (income < 0) {
    throw new Error("Income cannot be negative");
  }
  if (income <= 10000) {
    return 0;
  }
  if (income <= 50000) {
    return Number(((income - 10000) * 0.1).toFixed(2));
  }
  return Number((4000 + (income - 50000) * 0.2).toFixed(2));
}

function calculateNetIncome(income) {
  const tax = calculateTax(income);
  return Number((income - tax).toFixed(2));
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculateTax, calculateNetIncome };
}
