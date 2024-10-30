const convertButton = document.querySelector(".convert-button")

function convertVelue(){
const inputCurrencyValue = document.querySelector(".input-currency").value
const valorConvercao = document.querySelector(".valor-convercao")
const valorConvertido = document.querySelector(".valor-convertido")
const dolarToday = 5.25
const convertValue = inputCurrencyValue / dolarToday

valorConvercao.innerHTML = new Intl.NumberFormat("pt-br", {
style: "currency",
currency: "BRL"
}).format(inputCurrencyValue)

valorConvertido.innerHTML = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD"
    }).format(convertValue)

console.log(convertValue)

}


convertButton.addEventListener("click", convertVelue )
