let lastRenderTime = 0;
let SNAKE_SPEED = 2;
function main(currentTime){
    requestAnimationFrame(main);
    let timeBetweenTwoPaints = (currentTime - lastRenderTime)/1000;
    if(timeBetweenTwoPaints < 1 / SNAKE_SPEED){
       return;
    }
    console.log("paint");
    lastRenderTime = currentTime;
}

requestAnimationFrame(main);