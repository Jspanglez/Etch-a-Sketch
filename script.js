const container = document.getElementById("container")
const btn = document.querySelector('button');

function createGrid(input) {
  for (let i = 0; i < (input * input); i++) {
    const square = document.createElement('div')
    const boxSize = 600 / input
    square.classList.add('square')
    // square.textContent = i + 1
    square.style.width = (boxSize - 1.6) + 'px'
    square.style.height = boxSize + 'px'
    square.addEventListener("click", function() {
      this.classList.toggle("selected")
    })
    container.appendChild(square)
  }
}
})