import { update as updateSnake , draw as drawSnake  , SNAKE_SPEED} from "./snake.js";
import { updateFood  , drawFood} from "./food.js";
const gameboard = document.getElementById('gameboard');
let lastRenderTime = 0;

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
    updateFood();
}

function draw(gameboard){
    gameboard.innerHTML = "";
    drawSnake(gameboard);
    drawFood(gameboard);
}

requestAnimationFrame(main);


