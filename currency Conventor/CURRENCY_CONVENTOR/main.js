// const resultPromise = fetch(
//   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
// );

// resultPromise.then(outcome =>{
//     console.log(outcome);
//     // response

//     // convert this response into  a javascript object
//     const result = outcome.json();

//     // promise - when promise is resolve it will give us the Data nad Javascript
//     result.then(res =>{
//         console.log(res);
//     })
// })

// // JSON

// // JAVASCRIPT
// // OBJECT
// // NOTATION
document.addEventListener("DOMContentLoaded", () => {
  const convertButton = document.getElementById("convert");

  let currencyInfo = {};

  fetch(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
  )
    .then((res) => res.json())
    .then((data) => (currencyInfo = data));

  function getListOfCurrencies() {
    return fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    ).then((res) => res.json());
  }

  function buildCurrencyOptions() {
    let fromCurrency = document.getElementById("fromCurrency");
    let toCurrency = document.getElementById("toCurrency");

    getListOfCurrencies().then((listOfCurrencies) => {
      for (let key in listOfCurrencies) {
        let fromCurrencyOption = document.createElement("option");
        fromCurrencyOption.value = key;
        fromCurrencyOption.textContent = listOfCurrencies[key];
        fromCurrency.appendChild(fromCurrencyOption);

        let toCurrencyOption = document.createElement("option");
        toCurrencyOption.value = key;
        toCurrencyOption.textContent = listOfCurrencies[key];
        toCurrency.appendChild(toCurrencyOption);
      }
    });
  }

  function convertCurrency() {
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let amount = document.getElementById("amount").value;

    if (fromCurrency && toCurrency && amount) {
      let { eur } = currencyInfo;
      let conversionRate = eur[toCurrency] / eur[fromCurrency];
      let convertedAmount = amount * conversionRate;

      let result = document.getElementById("result");
      result.value = convertedAmount.toFixed(2);
    } else {
      alert("Please select both currencies and enter a valid amount.");
    }
  }

  convertButton.addEventListener("click", convertCurrency);
  buildCurrencyOptions();
});
