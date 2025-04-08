
const tempInput = document.getElementById("tempInput");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if(toFarenheit.checked) {
        temp = parseFloat(tempInput.value);
        temp = (tempInput.value * 9/5) + 32;
        result.textContent = `${tempInput.value} °C is ${temp.toFixed(2)} °F`;
    }
    else if(toCelsius.checked) {
        temp = parseFloat(tempInput.value);
        temp = (tempInput.value - 32) * 5/9;
        result.textContent = `${tempInput.value} °F is ${temp.toFixed(2)} °C`;
    } else {
        result.textContent = "Please select a conversion type.";
    }
    
}