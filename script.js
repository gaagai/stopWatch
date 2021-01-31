// Element
const $main = document.getElementById("main")
const $display = document.getElementById("display")
const $start = document.getElementById("start")
const $reset = document.getElementById("reset")
const $pause = document.getElementById("pause")

// Variables
let counter = 0
let timeInterval
// Constants
const increment = 1000

// Functions
const init = () => {
  if (counter >= 1) {
    clearInterval(timeInterval)
  }

  timeInterval = setInterval(secCount, increment)
  $main.classList.remove("pause")
  $main.classList.add("start")
  $start.disabled = true
}

const secCount = () => {
  counter++
  $display.innerHTML = counter
}

const pause = () => {
  clearInterval(timeInterval)
  $start.disabled = false

  $main.classList.add("pause")
}

const reset = () => {
  counter = 0
  $display.innerHTML = counter
}

// Listeners
$start.addEventListener("click", init)
$reset.addEventListener("click", reset)
$pause.addEventListener("click", pause)
