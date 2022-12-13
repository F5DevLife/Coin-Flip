const flip_button = document.getElementById("flipButton")

flip_button.addEventListener("click", flipCoin)

function flipCoin() {
    
    const result = Math.random() < 0.5 ? "Heads" : "Tails"
    showResult(result)
}

// Show the result of the coin flip
function showResult(result) {
    document.querySelector("p").innerText = result
}
