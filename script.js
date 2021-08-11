import { update as updateSnake , draw as drawSnake} from "./snake.js";
const gameboard = document.getElementById('gameboard');
let lastRenderTime = 0;
let SNAKE_SPEED = 2;
window.addEventListener('keydown', (e)=>{
    console.log(e.key);
})
function main(currentTime){
    requestAnimationFrame(main);
    let timeBetweenTwoPaints = (currentTime - lastRenderTime)/1000;
    if(timeBetweenTwoPaints < 1 / SNAKE_SPEED){
       return;
    }
    console.log("paint");
    lastRenderTime = currentTime;

    update();
    draw(gameboard);
}

function update() {
    updateSnake();
}

function draw(gameboard){
    gameboard.innerHTML = "";
    drawSnake(gameboard);
}

requestAnimationFrame(main);


