const convertButton = document.querySelector(".convert-button")
const moedaConvertida = document.querySelector(".moeda-convertida")

function convertVelue(){
const inputCurrencyValue = document.querySelector(".input-currency").value
const valorConvercao = document.querySelector(".valor-convercao")
const valorConvertido = document.querySelector(".valor-convertido")


const dolarToday = 5.25
const euroToday = 6
const libraToday = 7.5


if(moedaConvertida.value == "dolar"){
    valorConvertido.innerHTML = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

}

if(moedaConvertida.value == "euro"){
    valorConvertido.innerHTML = new Intl.NumberFormat("pt-pt", {
        style: "currency",
        currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

}

if(moedaConvertida.value == "libra"){
    valorConvertido.innerHTML = new Intl.NumberFormat("en-uk", {
        style: "currency",
        currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

}

}

valorConvercao.innerHTML = new Intl.NumberFormat("pt-br", {
style: "currency",
currency: "BRL"
}).format(inputCurrencyValue)

convertButton.addEventListener("click", convertVelue )
