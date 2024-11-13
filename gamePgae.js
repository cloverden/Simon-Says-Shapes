const shapes = document.querySelectorAll('.triangle, .square, .circle');
// store thses html element in the VARIABLE SHAPES(NodeList)

let sequence = [];
let playerSequence =[];
let level =3; // initial difficulty
// let currentIndex = 0;


function startGame() {
    message.textContent = "你点击了按钮！";
    console.log('游戏开始了！');
}


// startButton
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startGame); // when u click START,call the startGame function 
const message = document.getElementById('message');

