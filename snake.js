const snakeBody = [{x:11 , y:11}, {x:11 , y:12} , {x:11 , y:13} , {x:11 , y:14} , {x:11 , y:15},{x:11 , y:16}];
export function update(){
    for(let i=snakeBody.length-2 ; i>=0 ; i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += 1;
    snakeBody[0].y += 0;
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