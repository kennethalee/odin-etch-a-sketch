const containerDiv = document.querySelector(".container");

function createGrid(gridSize) {
  containerDiv.innerHTML = "";
  const cellSize = Math.floor(400 / gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${cellSize}px`;
    gridCell.style.height = `${cellSize}px`;
    gridCell.classList.add("grid-item");
    containerDiv.appendChild(gridCell);

    gridCell.addEventListener("mouseover", () => {
      gridCell.style.backgroundColor = "black";
    });
  }
  containerDiv.style.width = `${cellSize * gridSize}px`;
  containerDiv.style.height = `${cellSize * gridSize}px`;
}

const generateBtn = document.querySelector("button");
generateBtn.textContent = "Generate New Grid";
generateBtn.addEventListener("click", () => {
  let newGrid = prompt("Enter new grid size (1~100)", 16);
  if (newGrid === null) {
    return;
  }

  if (isNaN(newGrid) || newGrid < 1 || newGrid > 100) {
    alert("I said, below 100.");
    return;
  }
  createGrid(newGrid);
});
