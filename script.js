const container = document.getElementById("container")

let counter = 1

do {
  const square = document.createElement("div")
  square.className = "square"
  container.appendChild(square)
  counter++
} while (counter <= 256)

const squares = document.querySelectorAll(".square")
squares.forEach((square) => {
  square.addEventListener("click", function() {
    this.classList.toggle("selected")
  })
})