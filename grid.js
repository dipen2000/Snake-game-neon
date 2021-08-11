export function equalPosition(pos1 , pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function getRandomPosition(){
    const x_coordinate = Math.floor(Math.random()*21)+1;
    const y_coordinate = Math.floor(Math.random()*21)+1;
    return {x : x_coordinate , y : y_coordinate};
}

export function outsideGrid(position){
    return position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21;
}