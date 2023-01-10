const container = document.getElementById("container");

function makeRows (rows, cols) {
    for (i=0; i < (rows*cols); i++) {
        const div = document.createElement("div");
        container.appendChild(div).className = "grid-items";
    }
}

makeRows(16, 16);


function hoverColor() {
    let items = document.querySelectorAll('.grid-items');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'orange';
        });
    });
}

hoverColor();