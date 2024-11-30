// document.addEventListener("DOMContentLoaded" , function(){


//     let listOfCurrencies = {}

//     fetch(
//       "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
//     ).then((res ) => res.json()).then((res)=>{
//         listOfCurrencies = res
//         buildListOfCurrencies()
    
//     })


//     function buildListOfCurrencies(){

//         for (let key in  listOfCurrencies){
//             const fromCurrency = document.getElementById("fromCurrency");
//             const toCurrency = document.getElementById("toCurrency");

//             const fromOption = document.createElement("option");
//             fromOption.id = `${key}_from`;
//             fromOption.value = key;
//             fromOption.textContent = listOfCurrencies[key];
//             fromCurrency.appendChild(fromOption);

//             const toOption = document.createElement("option");
//             toOption.id = `${key}_to`;
//             toOption.value = key;
//             toOption.textContent = listOfCurrencies[key];
//             toCurrency.appendChild(toOption);
//         }
    
//     }
    
//       document.getElementById("convert").addEventListener("click" , function(event){
//         event.preventDefault();

//         const fromCurrency = document.getElementById("formCurrency").value;
//         const toCurrency = document.getElementById("toCurrency").value;
//         const amount = document.getElementById("amount").value;

//         if (!amount  || amount <0){
//             alert("Plese enter a valid amount")
//             return
//         }

//         let currentAmount = {};

//         fetch(
//           "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
//         )
//           .then((res) => res.json())
//           .then((data) => {
//             currentAmount = data;
           
//             const conversionRate = currentAmount[fromCurrency]/ currentAmount[toCurrency];
//             const convertedAmount = amount * conversionRate;

//             const result = document.getElementById("result");
//             result.textContent = convertedAmount.toFixed(2);
//           });


//       })


// })