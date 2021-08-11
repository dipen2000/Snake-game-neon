let food = {x:0 , y:0};
export function updateFood(){

}

export function drawFood(gameboard){
    food = {x:20 , y: 2};
    const foodElement = document.createElement("div");
    foodElement.classList.add("food");
    gameboard.appendChild(foodElement);
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
}