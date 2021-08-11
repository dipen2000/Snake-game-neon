let randomBlock = {x:0 , y:0};
export function equalPosition(pos1 , pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function getRandomPosition(){
    const x_coordinate = Math.floor(Math.random()*21)+1;
    const y_coordinate = Math.floor(Math.random()*21)+1;
    return {x : x_coordinate , y : y_coordinate};
}