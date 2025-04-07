
const myButton = document.getElementById("myButton");
const mylabel = document.getElementById("mylabel");

const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");


let randomNum;


myButton.onclick = function() {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    if (!isNaN(min) && !isNaN(max) && min < max) {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        mylabel.textContent = randomNum;
    } else {
        mylabel.textContent = "Invalid Input";
    }
};
reset.onclick = function() {
    randomNum = 0
    mylabel.textContent = randomNum;
}
