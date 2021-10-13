var keys = {
    LEFT: 37,
    UP: 38,
    RIGTH: 39,
    DOWN: 40
};

console.log(keys);



document.addEventListener("keydown", keyboardDraw)



var square = document.getElementById("canvasLienzo")
var papper = square.getContext("2d");
var x = 250;
var y = 250;



createDraws("yellow", 249, 249, 251, 251, papper)



//Drawing with a function
function createDraws(color, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 20;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath();
}



function keyboardDraw(eventParameter){
    var color = "yellow";
    var movement = 3;


    switch (eventParameter.keyCode){
        case keys.LEFT:
            console.log("IZQ");
            createDraws(color, x, y, x-movement, y ,papper);
            x -= movement;
        break;    

        case keys.UP:
            console.log("UP");
            createDraws(color, x, y, x, y-movement ,papper);
            y -= movement;
        break;

        case keys.RIGTH:
            console.log("DER");
            createDraws(color, x, y, x+movement, y ,papper);
            x += movement;
        break;

        case keys.DOWN:
            console.log("DOWN");
            createDraws(color, x, y, x, y+movement ,papper);
            y += movement;
        break;

        default:
            console.log("Oprimiste otra tecla")
        break;
    }

}