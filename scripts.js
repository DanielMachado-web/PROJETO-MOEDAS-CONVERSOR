const convertButton = document.querySelector(".convert-Button");
const selectMoeda = document.querySelector(".select-moeda");


function convertvalue() {
    const inputValue = document.querySelector(".input-value").value;
    const moedavalorconverter = document.querySelector(".moeda-valor-converter"); //valor em real
    const moedavalorConvertido = document.querySelector(".moeda-valor"); //outros valores
   
    const brasiltoday = 1; // Taxa de conversão do Real para Real (1:1)
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const bitcoinToday = 200000; // Exemplo de taxa de conversão para Bitcoin
    const libraToday = 7.2; // Exemplo de taxa de conversão para Libra

    if (selectMoeda.value === "dolar") {

        moedavalorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday);

    }

    if (selectMoeda.value == "euro") {
        moedavalorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday);

    }

    if (selectMoeda.value == "libra") {
        moedavalorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / 7.2); // Exemplo de taxa de conversão para Libra

    }

    if (selectMoeda.value == "bitcoin") {
        moedavalorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / 200000); // Exemplo de taxa de conversão para Bitcoin

    }

    
    moedavalorconverter.innerHTML = new Intl.NumberFormat("en-US", { // Formato brasileiro
        style: "currency",
        currency: "BRL"
    }).format(inputValue);

   
}

function changemoeda() {
    const moedaAmericano = document.getElementById("moeda-americano");
    const moedaimg = document.querySelector(".moeda-img");

    if (selectMoeda.value === "real") {
        moedaAmericano.innerHTML = "Real";
        moedaimg.src = "./assets/real.png";
    }

    if (selectMoeda.value === "dolar") {
        moedaAmericano.innerHTML = "Dólar Americano";
        moedaimg.src = "./assets/dolar.png";
    }

    if (selectMoeda.value === "euro") {
        moedaAmericano.innerHTML = "Euro";
        moedaimg.src = "./assets/euro.png";
    }


    if (selectMoeda.value === "libra") {
        moedaAmericano.innerHTML = "Libra Esterlina";
        moedaimg.src = "./assets/libra.png";
    }

    if (selectMoeda.value === "bitcoin") {
        moedaAmericano.innerHTML = "Bitcoin";
        moedaimg.src = "./assets/bitcoin.png";
    }
}



selectMoeda.addEventListener("change", changemoeda);
convertButton.addEventListener("click", convertvalue);
// primeira coisa que o usuario vai fazer é clicar no botao de converter, entao vamos adicionar o evento de click no botao//




//alteração novo
// Selecionando os elementos do DOM;
const selectFrom = document.querySelector(".select-from"); // moeda de origem
const selectTo = document.querySelector(".select-to");     // moeda de destino

const rates = {
    BRL: 1,
    USD: 5.2,
    EUR: 6.2,
    GBP: 7.2,
    BTC: 200000
};

const locales = {
    BRL: { locale: "pt-BR", currency: "BRL" },
    USD: { locale: "en-US", currency: "USD" },
    EUR: { locale: "de-DE", currency: "EUR" },
    GBP: { locale: "en-GB", currency: "GBP" },
    BTC: { locale: "en-US", currency: "BTC" }
};

function convertvalue() {
    const inputValue = parseFloat(document.querySelector(".input-value").value);
    const moedavalorconverter = document.querySelector(".moeda-valor-converter");
    const moedavalorConvertido = document.querySelector(".moeda-valor");

    const from = selectFrom.value;
    const to = selectTo.value;

    // Converter para Real, depois para a moeda de destino
    const valueInBRL = inputValue * rates[from];
    const convertedValue = valueInBRL / rates[to];

    moedavalorConvertido.innerHTML = new Intl.NumberFormat(locales[to].locale, {
        style: "currency",
        currency: locales[to].currency
    }).format(convertedValue);

    moedavalorconverter.innerHTML = new Intl.NumberFormat(locales[from].locale, {
        style: "currency",
        currency: locales[from].currency
    }).format(inputValue);
}

convertButton.addEventListener("click", convertvalue);







