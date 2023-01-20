const container = document.getElementById("container");
const button = document.querySelector("input");

button.addEventListener('click', ()=> {
    numOfSquares();
})

function numOfSquares() {
    if (button.value === "number of squares") {
        let newNumPerRow = prompt("how many squares per side would you like? (1-99)", "");
        let parse = parseInt(newNumPerRow);
        if (parse >= 100 || parse <= 0 || newNumPerRow === "" || isNaN(newNumPerRow)) {
            alert ("choose a different number")
            return false
        } else if (newNumPerRow === null) {
            return false;
        } else {
            makeRows(parse);
        }
    }
}

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

function hoverColor() {
    let items = document.querySelectorAll('.gridItems');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColor()}`;
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

    for (let i=0; i < total; i++) {
        const div = document.createElement('div');
        container.appendChild(div).className = "gridItems";

        if (i % box === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
        } else {
        div.style.cssText = `border: 1px solid black; height: ${600 / numberPerRow}px; width: ${600 / numberPerRow}px`;
        }

    }
    hoverColor();
}

makeRows(16);