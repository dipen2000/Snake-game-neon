let inputPosition = {x:0 , y:0};

window.addEventListener('keydown', (e)=>{
    switch(e.key){
        case "ArrowUp" :
            inputPosition = {x:0 , y : -1};
            break;
        case "ArrowDown" :
            inputPosition = {x:0 , y : 1};
            break;
        case "ArrowRight" :
            inputPosition = {x:1 , y : 0};
            break;
        case "ArrowLeft" :
            inputPosition = {x:-1 , y : 0};
            break;
    }
})

export function getInputPosition(){
    return inputPosition;
}