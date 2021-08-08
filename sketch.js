const sketchBox = document.getElementById('sketch-box');
const gridSize = document.querySelector('input[type=text]');
const resetButton = document.querySelector('input[type=button]');

resetButton.addEventListener('click', buildGrid);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function colorNode(node) {
    this.classList.add('colored');
}

function buildGrid() {
    let x = parseInt(gridSize.value);
    removeAllChildNodes(sketchBox);
    if (Number.isInteger(x) && x>0 && x<101) {
        for (let i = 1; i <= x; i++) { //generate rows
            let row = document.createElement('div');
            for (let i = 1; i <= x; i++) { //generate cells in each row
                let cell = document.createElement('div');
                cell.style.height = (75/x)-(3/x)+'vmin';
                cell.style.width = (75/x)-(3/x)+'vmin';
                row.appendChild(cell);
            }
            row.style.height = (75/x)-(3/x)+'vmin';
            if (i == 1) {  //checks for first and last rows for styling purposes
                row.classList.add('first-row');
            } else if (i == x) {
                row.classList.add('last-row');
            }
            sketchBox.appendChild(row);
        }
        const cells = document.querySelectorAll('#sketch-box>div>div');
        cells.forEach(cell => cell.addEventListener('mouseover', colorNode));
    } else {
        let warning = document.createElement('p');
        warning.innerText = 'enter grid size from 1-100';
        sketchBox.appendChild(warning);
    }
}

