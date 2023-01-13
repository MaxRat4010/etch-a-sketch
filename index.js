const container = document.getElementById("container");
const button = document.querySelector("input");

button.addEventListener('click', ()=> {
    numOfSquares();
})

function numOfSquares() {
    if (button.value === "number of squares") {
        let newNumPerRow = prompt("how many squares per side would you like?", "");
        let parse = parseInt(newNumPerRow);
        makeRows(parse);
    }
}

function hoverColor() {
    let items = document.querySelectorAll('.gridItems');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'orange';
        });
    });
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach(element => {
      container.removeChild(element);
    })
  }

function makeRows (numberPerRow) {
    clearGrid();
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const box = numberPerRow + 1;

    for (i=0; i < total; i++) {
        const div = document.createElement('div');
        container.appendChild(div).className = "gridItems";

        if (i % box === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
        } else {
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        }

    }
    hoverColor();
}

makeRows(16);