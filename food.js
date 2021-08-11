import {snakeBody  , onSnake} from "./snake.js"
let food = {x:0 , y:0};
food={x:20 , y:2};
export function updateFood(){
    
    if(onSnake(food)){
        // expandSnake();
        
        food = {x : 2 , y : 20};
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