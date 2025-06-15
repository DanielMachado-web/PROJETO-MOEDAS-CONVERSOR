const convertButton = document.querySelector(".convert-Button");
const selectMoeda = document.querySelector(".select-moeda");


function convertvalue() {
    const inputValue = document.querySelector(".input-value").value;
    const moedavalorconverter = document.querySelector(".moeda-valor-converter"); //valor em real
    const moedavalorConvertido = document.querySelector(".moeda-valor"); //outros valores

    console.log(selectMoeda.value);
    
    const dolarToday = 5.2;
    const euroToday = 6.2;

    const convertedValue = inputValue / dolarToday;

    moedavalorconverter.innerHTML = new Intl.NumberFormat("pt-BR", { // Formato brasileiro
        style: "currency",
        currency: "BRL"
    }).format(inputValue);

    moedavalorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue);

    console.log(convertedValue);
}
convertButton.addEventListener("click", convertvalue);
// primeira coisa que o usuario vai fazer é clicar no botao de converter, entao vamos adicionar o evento de click no botao//












