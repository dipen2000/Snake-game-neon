// let lastRenderTime = 0;
// let SNAKE_SPEED = 2;
// function main(currentTime){
//     requestAnimationFrame(main);
//     let timeBetweenTwoPaints = (currentTime - lastRenderTime)/1000;
//     if(timeBetweenTwoPaints < 1 / SNAKE_SPEED){
//        return;
//     }
//     console.log("paint");
//     lastRenderTime = currentTime;
// }

// requestAnimationFrame(main);

const gameboard = document.getElementById('gameboard');


for(let i=0;i<5;i++){
    const snake = document.createElement("div");
    snake.classList.add("snake");
    gameboard.appendChild(snake);
    snake.style.gridColumnStart = 11;
    snake.style.gridRowStart = 11+i;
}


const food = document.createElement("div");
food.classList.add("food");
gameboard.appendChild(food);
food.style.gridColumnStart = 11;
food.style.gridRowStart = 8;

