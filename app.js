
var flip_button = document.getElementById("flipButton")

flip_button.addEventListener("click", flipCoin)


// Flip coin
function flipCoin() {
    return Math.round(Math.random())
}

// Show the result of the coin flip
function showResult() {
    document.querySelector("p").innerText = flipCoin()
}


console.log("hello")