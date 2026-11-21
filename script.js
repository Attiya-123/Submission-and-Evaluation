const form = document.getElementById("tax-form");
const incomeInput = document.getElementById("income");
const message = document.getElementById("message");
const results = document.getElementById("results");
const taxResult = document.getElementById("tax-result");
const netResult = document.getElementById("net-result");
const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD"
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const income = Number(incomeInput.value);

  if (incomeInput.value === "" || !Number.isFinite(income) || income < 0) {
    results.hidden = true;
    message.textContent = "Enter a valid, non-negative income.";
    return;
  }

  try {
    taxResult.textContent = currency.format(calculateTax(income));
    netResult.textContent = currency.format(calculateNetIncome(income));
    results.hidden = false;
    message.textContent = "";
  } catch (error) {
    results.hidden = true;
    message.textContent = error.message;
  }
});
