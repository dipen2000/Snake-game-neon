import { getInputPosition } from "./input.js";
import { equalPosition } from "./grid.js";
export let SNAKE_SPEED = 3;
export const snakeBody = [{x:11 , y:11},{x:11 , y:12}];
export function update(){
    const inputPosition = getInputPosition();
    for(let i=snakeBody.length-2 ; i>=0 ; i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputPosition.x;
    snakeBody[0].y += inputPosition.y;
}

export function draw(gameboard){
    snakeBody.forEach(segment => {
        const snakeSegment = document.createElement("div");
        snakeSegment.classList.add("snake");
        gameboard.appendChild(snakeSegment);
        snakeSegment.style.gridRowStart = segment.y;
        snakeSegment.style.gridColumnStart = segment.x;
    });
}

export function onSnake(position){
    return snakeBody.some(segment=>{
        return equalPosition(segment , position);
    })
}