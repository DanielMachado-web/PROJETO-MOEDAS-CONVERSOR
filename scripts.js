const convertButton = document.querySelector(".convert-Button");

function convertvalue() {
    const inputValue = document.querySelector(".input-value").value;
    console.log(inputValue);
   
convertButton.addEventListener("click", convertvalue ) 