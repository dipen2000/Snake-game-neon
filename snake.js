import { getInputPosition } from "./input.js";
const snakeBody = [{x:11 , y:11}];
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