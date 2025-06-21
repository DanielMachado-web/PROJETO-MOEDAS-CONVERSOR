const convertButton = document.querySelector(".convert-Button");
const selectMoeda = document.querySelector(".select-moeda"); // moeda selecionada
const selectFrom = document.querySelector(".select-from"); // moeda de origem
const selectTo = document.querySelector(".select-to");


function convertvalue() {
    const inputValue = document.querySelector(".input-value").value;
    const moedavalorconverter = document.querySelector(".moeda-valor-converter"); //valor em real
    const moedavalorConvertido = document.querySelector(".moeda-valor"); //outros valores

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

function convertvalue() {
    const inputValue = parseFloat(document.querySelector(".input-value").value);
    const moedavalorconverter = document.querySelector(".moeda-valor-converter");
    const moedavalorConvertido = document.querySelector(".moeda-valor");

    const from = selectFrom.value;
    const to = selectTo.value;

    // Converter para Real, depois para a moeda de destino
    const valueInBRL = inputValue * rates[USD];
    const convertedValue = valueInBRL / rates[BRL];
    const BRL = locales[BRL];
    const USD = locales[USD];
    const EUR = locales[EUR];
    const GBP = locales[GBP];
    const BTC = locales[BTC];
    const locale = locales[to].locale;
    

    moedavalorConvertido.innerHTML = new Intl.NumberFormat("BRL".locale, {
        style: "currency",
        currency: "BRL"
    }).format(convertedValue);

    moedavalorconverter.innerHTML = new Intl.NumberFormat("USD".locale, {
        style: "currency",
        currency: "USD"
    }).format(inputValue);
}

convertButton.addEventListener("click", convertvalue);
selectMoeda.addEventListener("change", changemoeda);

// primeira coisa que o usuario vai fazer é clicar no botao de converter, entao vamos adicionar o evento de click no botao//














