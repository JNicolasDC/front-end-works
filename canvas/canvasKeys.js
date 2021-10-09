var keys = {
    LEFT: 37,
    UP: 38,
    RIGTH: 39,
    DOWN: 40
};

console.log(keys);


document.addEventListener("keyup", keyboardDraw)

function keyboardDraw(eventParameter){
    switch (eventParameter.keyCode){
        case keys.LEFT:
            console.log("IZQ");
        break;    

        case keys.UP:
            console.log("UP");
        break;

        case keys.RIGTH:
            console.log("IZQ");
        break;

        case keys.DOWN:
            console.log("IZQ");
        break;

        default:
            console.log("Oprimiste otra tecla")
        break;
    }

}