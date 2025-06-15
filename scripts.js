const convertButton = document.querySelector(".convert-Button");
const selectMoeda = document.querySelector(".select-moeda");


function convertvalue() {
    const inputValue = document.querySelector(".input-value").value;
    const moedavalorconverter = document.querySelector(".moeda-valor-converter"); //valor em real
    const moedavalorConvertido = document.querySelector(".moeda-valor"); //outros valores


    const dolarToday = 5.2;
    const euroToday = 6.2;

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

    moedavalorconverter.innerHTML = new Intl.NumberFormat("pt-BR", { // Formato brasileiro
        style: "currency",
        currency: "BRL"
    }).format(inputValue);

}

function changemoeda() {
    const moedaAmericano = document.getElementById("moeda-americano");
    const moedaimg = document.querySelector(".moeda-img");

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












