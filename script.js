import { update as updateSnake , draw as drawSnake  , SNAKE_SPEED, snakeBody , snakeInteraction} from "./snake.js";
import { updateFood  , drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";
const gameboard = document.getElementById('gameboard');
const foodCountElement = document.getElementById("foodCount");
let lastRenderTime = 0;
export let foodCount = 0;
let gameOver = false;
export function incrementFoodCount(){
    foodCount++;
}
function main(currentTime){
    if(gameOver){
        if(confirm(`Your score is ${foodCount}!! Would you like to restart?`)){
            window.location.reload();
        }
        return;
    }
    requestAnimationFrame(main);
    let timeBetweenTwoPaints = (currentTime - lastRenderTime)/1000;
    if(timeBetweenTwoPaints < 1 / SNAKE_SPEED){
        return;
    }
    
    lastRenderTime = currentTime;
    
    update();
    draw(gameboard);
    checkDeath();
    foodCountElement.innerHTML=`FOOD : ${foodCount}`;
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

function checkDeath(){
    gameOver = outsideGrid(snakeBody[0]) || snakeInteraction();
}
requestAnimationFrame(main);


