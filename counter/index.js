const countlable = document.getElementById("counterlabel");
const increasebt = document.getElementById("increasebt");
const decreasebt = document.getElementById("decreasebt");
const resetbt = document.getElementById("resetbt"); 

let count = 0; // Initialize the counter variable

increasebt.onclick = function() {
    count++; // Increment the counter
    countlable.textContent = count; // Update the label with the new count
}
decreasebt.onclick = function() {
    count--; // Increment the counter
    countlable.textContent = count; // Update the label with the new count
}
resetbt.onclick = function() {
    count = 0; // Reset the counter to zero
    countlable.textContent = count; // Update the label with the new count
}