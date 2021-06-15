//Start with the counter
const counter = document.querySelector("#counter")
let counterValue = 0
let counting
const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const heartButton = document.querySelector("#heart")
const pauseButton = document.querySelector("#pause")

document.addEventListener("DOMContentLoaded", (event) => {
  startCounter()
  minusButton.addEventListener("click", decreaseCounter)
  plusButton.addEventListener("click", increaseCounter)
  //heartButton.addEventListener("click", likeNumberOnCounter)
})

const increaseCounter = () => {
  counterValue += 1
  counter.innerHTML = counterValue
}

const decreaseCounter = () => {
  counterValue -= 1
  counter.innerHTML = counterValue
}

const startCounter = () => {
  pauseButton.innerHTML = "pause"
  counting = setInterval(increaseCounter, 1000)
  pauseButton.removeEventListener("click", startCounter)
  pauseButton.addEventListener("click", stopCounter)
  return counting
}

const stopCounter = () => {
  pauseButton.innerHTML = "resume"
  pauseButton.removeEventListener("click", stopCounter)
  pauseButton.addEventListener("click", startCounter)
  return clearInterval(counting)
}

// like button
//when clicked appends object with number: number numberOfTimesLiked: 2,
const heartArrayObj = [
  {likedNumber: 10,
    numberOfLikes: 1
  }

  ]


const likeNumberOnCounter = () => {
  let likedNumber = counter.innerHTML
  const heartObj = {}
  heartObj["number"] = likedNumber
  heartObj["numberOfLikes"] += 1
}





//comments



