let inputPosition = {x:0 , y:0};
let lastPosition = {x:0 , y:0};
window.addEventListener('keydown', (e)=>{
    switch(e.key){
        case "ArrowUp" :
            if(lastPosition.y !== 0){
                break;
            }
            inputPosition = {x:0 , y : -1};
            break;
        case "ArrowDown" :
            if(lastPosition.y !== 0){
                break;
            }
            inputPosition = {x:0 , y : 1};
            break;
        case "ArrowRight" :
            if(lastPosition.x !=0){
                break;
            }
            inputPosition = {x:1 , y : 0};
            break;
        case "ArrowLeft" :
            if(lastPosition.x !=0){
                break;
            }
            inputPosition = {x:-1 , y : 0};
            break;
    }
})

export function getInputPosition(){
    lastPosition = inputPosition;
    return inputPosition;
}