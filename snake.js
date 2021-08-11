import { getInputPosition } from "./input.js";
import { equalPosition ,getRandomPosition } from "./grid.js";
export let SNAKE_SPEED = 5;
export const snakeBody = [getRandomPosition()];
let newSegments = 0;
export function expandSnake(amount){
    newSegments += amount;
}
export function update(){
    addSegments();
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

export function onSnake(position , { ignoreHead = false} = {}){
    return snakeBody.some((segment,index)=>{
        if(ignoreHead && index === 0){
            return false;
        }
        return equalPosition(segment , position);
    })
}

function addSegments(){
    for(let i=0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSegments = 0;
}

export function snakeInteraction(){
    return onSnake(snakeBody[0] , { ignoreHead : true });
}