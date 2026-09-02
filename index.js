const inputEl = document.getElementById("input")
const btnEl = document.getElementById("btn")
const scoreEl = document.getElementById("score")
const min =1
const max =100
let random = Math.floor(Math.random() * (max - min + 1)) + min

let attempt = 0


function calculate() {
    let value = Number(inputEl.value)

    if (value < min || value > max) {
        scoreEl.textContent = `Enter between 1 - 100`
        return
    }

    attempt++

    if (value > random) {
        scoreEl.textContent = `OOPS! Too big`
    }
    else if (value < random) {
        scoreEl.textContent = `OOPS! Too small`
    }
    else {
       scoreEl.textContent = `Gotcha 🎊 It took ${attempt} attempts`
       btnEl.style.display = "none"
    }
}
function resetGame() {
    random = Math.floor(Math.random() * (max - min + 1)) + min
    attempt = 0
    inputEl.value = ""
    scoreEl.textContent = ""
    btnEl.style.display = ""
}