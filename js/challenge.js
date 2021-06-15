//Start with the counter
const counter = document.querySelector("#counter")
let counterValue = 0
let counting
const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const heartButton = document.querySelector("#heart")
const pauseButton = document.querySelector("#pause")
const buttons = document.querySelectorAll('button')
const comment = document.querySelector("#comment-form")

document.addEventListener("DOMContentLoaded", (event) => {
  startCounter()
  minusButton.addEventListener("click", decreaseCounter)
  plusButton.addEventListener("click", increaseCounter)
  heartButton.addEventListener("click", likeNumberOnCounter)
  comment.addEventListener("submit", addComment)
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
  buttons.forEach(button => button.disabled = false)
  return counting
}

const stopCounter = () => {
  pauseButton.innerHTML = "resume"
  pauseButton.removeEventListener("click", stopCounter)
  pauseButton.addEventListener("click", startCounter)
  buttons.forEach(button => button.disabled = true)
  pauseButton.disabled = false
  return clearInterval(counting)
}

// like button
//when clicked appends object with number: number numberOfTimesLiked: 2,
const heartArrayOfObjs = []


const likeNumberOnCounter = () => {
  let likedNumber = counter.innerHTML
  const heartObj = {}
  const heartElement = heartArrayOfObjs.find((element) => element["likedNumber"] === likedNumber )
  if (heartElement) { 
    heartElement["numberOfLikes"] = parseInt(heartElement["numberOfLikes"]) + 1
    printNumberLikes(heartElement)
  } else {
    heartObj["likedNumber"] = likedNumber
    heartObj["numberOfLikes"] = 1
    heartArrayOfObjs.push(heartObj)
    printNumberLikes(heartObj)
  }
}

const printNumberLikes = () => {
  const likes = document.querySelector(".likes")
  likes.innerHTML = ""
  heartArrayOfObjs.forEach(element => {
    let li = document.createElement("li")
    li.innerText = `${element["likedNumber"]} has been liked ${element["numberOfLikes"]} ${ element["numberOfLikes"] === 1 ? "time" : "times" }`
    likes.appendChild(li)
  })
}

const addComment = (event) => {
  event.preventDefault()
  const list = document.querySelector("#list")
  const p = document.createElement('p')
  p.innerText =  document.querySelector("#comment-input").value
  list.appendChild(p)
  document.querySelector("#comment-input").value = ""
}

//comments



