const container = document.getElementById("container")

let counter = 0

do {
  const square = document.createElement("div")
  square.className = "square"
  container.appendChild(square)
  counter++
} while (counter < 16)

