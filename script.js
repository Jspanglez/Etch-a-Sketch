const container = document.getElementById("container")
const btn = document.querySelector('button')
const color = document.getElementById('colorPicker')

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
      if(this.classList.contains("selected")) {
        this.style.backgroundColor = color.value
      } else {
        this.style.backgroundColor = ""
      }
    })
    container.appendChild(square)
  }
}

btn.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.remove()
    })
  const input = prompt("How many sqaures do you want on each side?")
  if (input > 16) {
    alert("You cannot exceed a 16 x 16 grid.")
  } else {
    createGrid(parseInt(input))
  }
})