
function generateSequence(){
    const randomShape = shapes[Math.floor(Math.random()*shapes.length)];
    sequence.push(randomShape.id);

    flashSequence();
}

// 控制形状的闪烁（根据序列显示形状）
function flashSequence(){
    let index=0;
    // 每一轮需要闪烁的次数为 level
    const interval = setInterval(() => {
        const shapeId = sequence[index];
        const shapeElement = document.getElementById(shapeId);

         // 闪烁当前形状
        shapeElement.style.backgroundColor = 'yellow';  // 改变背景色表示闪烁
        setTimeout(() => {
             shapeElement.style.backgroundColor = '';  // 恢复原来的颜色
         }, 500);
         
         index++;

         // 如果所有形状都已闪烁，停止闪烁
        if (index >= sequence.length) {
            clearInterval(interval);
            // 提示玩家开始输入
            console.log('请根据顺序点击形状');
        }
    }, 1000); // 每隔1秒闪烁一次
    }

    // 监听玩家点击
shapes.forEach(shape => {
    shape.addEventListener('click', () => {
        playerSequence.push(shape.id);
        console.log('玩家输入的序列: ', playerSequence);
        
        // 判断玩家输入的序列是否与生成的序列一致
        if (playerSequence.join('') === sequence.join('')) {
            console.log('正确！');
            playerSequence = []; // 清空玩家输入的序列
            level++; // 提高难度
            generateSequence(); // 生成新序列并闪烁
        } else if (playerSequence.length === sequence.length) {
            console.log('错误，请重试');
            playerSequence = []; // 清空玩家输入的序列
        }
    });

});

// 游戏初始化
function startGame() {
    sequence = []; // 清空之前的序列
    playerSequence = []; // 清空玩家的输入序列
    level = 3; // 重置难度
    generateSequence(); // 开始游戏时生成一个随机序列
    return "x=1";
}

// 获取按钮并添加事件监听
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startGame); // when u click START,call the startGame function 
