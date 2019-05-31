function compareRandom(a , b) {
    return Math.random() - 0.5;
}

function clearField() {
    if (pairs.length === colors.length) {
        alert('Ура! Вы выйграли!');
        pairs = [];
    }
    cells.forEach(cell => {
        if (!(pairs.includes(cell.id))) {
            cell.setAttribute("style", 'background-color: white');
        }
    });
    illuminatedCount = 0;
    illuminated = [];
}

let cells = document.querySelectorAll("div");
const colors = ['red', 'blue', 'green', 'fuchsia', 'silver', 'black', 'yellow', 'aqua',
    'red', 'blue', 'green', 'fuchsia', 'silver', 'black', 'yellow', 'aqua'];
let colorRatio = {};
let illuminated = [];
let pairs = [];
colors.sort(compareRandom);
for (let i = 0; i < cells.length; i++) {
    colorRatio[cells[i].id] = colors[i];
}

cells.forEach(cell => cell.addEventListener("click", function () {
    if (illuminated.length < 2 && !(pairs.includes(cell.id)) && !(illuminated.includes(cell.id))) {
        cell.setAttribute("style", `background-color: ${colorRatio[cell.id]}`);
        illuminated.push(cell.id);
    }
    if (illuminated.length === 2) {
        if (colorRatio[illuminated[0]] === colorRatio[illuminated[1]] && !(pairs.includes(illuminated[0]))) {
            pairs.push(illuminated[0], illuminated[1]);
        }
        setTimeout(() => clearField(), 1000);
    }
}));