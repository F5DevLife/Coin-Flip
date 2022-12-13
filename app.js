const flip_button = document.getElementById("flipButton")

flip_button.addEventListener("click", flipCoin)

function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails"
    showResult()
}

// Show the result of the coin flip
function showResult() {
    document.querySelector("p").innerText = flipCoin()
}
