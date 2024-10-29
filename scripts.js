const convertButton = document.querySelector(".convert-button")

function convertVelue(){
const inputCurrencyValue = document.querySelector(".input-currency").value
const dolarToday = 5.25
const convertValue = inputCurrencyValue / dolarToday
console.log(convertValue)

}


convertButton.addEventListener("click", convertVelue )
