//Start with the counter
const counter = document.querySelector("#counter")
let counterValue = 0
let counting

const increaseCounter = () => {
  return counterValue += 1
}

const decreaseCounter = () => {
  return counterValue -= 1
}

const startCounter = () => {
  counting = setInterval(increaseCounter, 1000)
  return counting
}

const stopCounter = () => {
  return clearInterval(counting)
}