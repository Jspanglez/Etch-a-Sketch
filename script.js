const container = document.getElementById("container")

let counter = 1

do {
  const square = document.createElement("div")
  square.className = "square"
  /* square.textContent = `${counter}`; */
  container.appendChild(square)
  counter++
} while (counter <= 256)

