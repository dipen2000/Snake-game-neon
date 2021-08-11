import { update as updateSnake , draw as drawSnake  , SNAKE_SPEED} from "./snake.js";
import { updateFood  , drawFood} from "./food.js";
const gameboard = document.getElementById('gameboard');
const foodCountElement = document.getElementById("foodCount");
let lastRenderTime = 0;
export let foodCount = 0;

export function incrementFoodCount(){
    foodCount++;
}
function main(currentTime){
    requestAnimationFrame(main);
    let timeBetweenTwoPaints = (currentTime - lastRenderTime)/1000;
    if(timeBetweenTwoPaints < 1 / SNAKE_SPEED){
        return;
    }
    
    lastRenderTime = currentTime;
    
    update();
    draw(gameboard);
    console.log(foodCount);
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

requestAnimationFrame(main);


