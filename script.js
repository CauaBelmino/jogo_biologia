let p1Sun = 0, p1CO2 = 0, p1Water = 0;
let p2Sun = 0, p2CO2 = 0, p2Water = 0;

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    document.getElementById('result').innerText = '';
    p1Sun = p1CO2 = p1Water = 0;
    p2Sun = p2CO2 = p2Water = 0;
    updateScores();
    document.getElementById('p1-plant').style.backgroundImage = '';
    document.getElementById('p2-plant').style.backgroundImage = '';
    bindElementClicks();
}

function bindElementClicks() {
    document.getElementById('sun').onclick = function() {
        collectElement('sun', 1);
    };
    document.getElementById('co2').onclick = function() {
        collectElement('co2', 1);
    };
    document.getElementById('water').onclick = function() {
        collectElement('water', 1);
    };
}

function collectElement(element, player) {
    if (element === 'sun') {
        if (player === 1) p1Sun++;
        else p2Sun++;
    } else if (element === 'co2') {
        if (player === 1) p1CO2++;
        else p2CO2++;
    } else if (element === 'water') {
        if (player === 1) p1Water++;
        else p2Water++;
    }

    updateScores();
    checkPlantGrowth();
    checkWinCondition();
}

function updateScores() {
    document.getElementById('p1-sun').innerText = p1Sun;
    document.getElementById('p1-co2').innerText = p1CO2;
    document.getElementById('p1-water').innerText = p1Water;

    document.getElementById('p2-sun').innerText = p2Sun;
    document.getElementById('p2-co2').innerText = p2CO2;
    document.getElementById('p2-water').innerText = p2Water;
}

function checkPlantGrowth() {
    if (p1Sun >= 3 && p1Water >= 3) {
        document.getElementById('p1-plant').style.backgroundImage = 'url("medium_plant.png")';
    } else {
        document.getElementById('p1-plant').style.backgroundImage = 'url("small_plant.png")';
    }
    if (p2Sun >= 3 && p2Water >= 3) {
        document.getElementById('p2-plant').style.backgroundImage = 'url("medium_plant.png")';
    } else {
        document.getElementById('p2-plant').style.backgroundImage = 'url("small_plant.png")';
    }
}

function checkWinCondition() {
    if (p1Sun >= 6 && p1CO2 >= 6 && p1Water >= 6) {
        document.getElementById('result').innerText = 'Jogador 1 Venceu!';
        document.getElementById('p1-plant').style.backgroundImage = 'url("grown_plant.png")';
        document.getElementById('p2-plant').style.backgroundImage = 'url("wilted_plant.png")';
        unbindElementClicks();
    } else if (p2Sun >= 6 && p2CO2 >= 6 && p2Water >= 6) {
        document.getElementById('result').innerText = 'Jogador 2 Venceu!';
        document.getElementById('p2-plant').style.backgroundImage = 'url("grown_plant.png")';
        document.getElementById('p1-plant').style.backgroundImage = 'url("wilted_plant.png")';
        unbindElementClicks();
    }
}

function unbindElementClicks() {
    document.getElementById('sun').onclick = null;
    document.getElementById('co2').onclick = null;
    document.getElementById('water').onclick = null;
}
