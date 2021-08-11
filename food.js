import {snakeBody  , onSnake} from "./snake.js"
import {getRandomPosition} from "./grid.js"
import {incrementFoodCount} from "./script.js"
const foodCountElement = document.getElementById("foodCount");
let food = {x:0 , y:0};
food=getRandomPositionNotOnTheSnake();
export function updateFood(){
    
    if(onSnake(food)){
        // expandSnake();
        
        food = getRandomPositionNotOnTheSnake();
        
        incrementFoodCount();
    }
}

export function drawFood(gameboard){
    // food = {x:20 , y: 2};
    const foodElement = document.createElement("div");
    foodElement.classList.add("food");
    gameboard.appendChild(foodElement);
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
}

function getRandomPositionNotOnTheSnake(){
    let newPosition;
    while(newPosition == null || onSnake(getRandomPosition())){
        newPosition = getRandomPosition();
    }
    return newPosition;
}