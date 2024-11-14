// 1.press start button--fucntion:gameStart
    // A.random sequence (item:1\2\3)(difficulty:3-10)(1-triangle，2-square,3-circle)
    // B.
// 2.
// 
// 
// 

const shapes = document.querySelectorAll('.triangle, .square, .circle');
// store thses html element in the VARIABLE SHAPES(NodeList)

let sequence = [];
let playerSequence =[];
let level =3; // initial difficulty
// let currentIndex = 0;


// for test now ，need to edit
function startGame() {
    console.log('游戏开始了！');    
    message.textContent = "你点击了按钮！";
   
}


// startButton
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startGame); // when u click START,call the startGame function 

const message = document.getElementById('message');

