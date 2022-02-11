let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let showScore = document.getElementById('score');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
// ascender
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}
//checar
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            return
        }
    }
    if (clickedOrder.length == order.length) {
        nextLevel();
    }
}

//clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//Retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//proximo nivel
let nextLevel = () => {
    showScore.innerHTML = `Score: ${score}`;
    score++;
    shuffleOrder();
}

let playGame = () => {
    alert('Bem vindo ao GeniusJS! Iniciando o jogo!')
    showScore.innerHTML = `Score: ${score}`;
    nextLevel();
}

// game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!`);
    order = [];
    clickedOrder = [];
    score = 0;
    showScore.innerHTML = `Score: ${score}`;
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//playGame();