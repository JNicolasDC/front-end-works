alert('Test')

var d = document.getElementById("dibujoCanvas");
var lienzo = d.getContext("2d");
console.log(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = "purple";
lienzo.moveTo(100,300);
lienzo.lineTo(100,100);
lienzo.lineTo(300,300);
lienzo.lineTo(300,100);
lienzo.stroke();
lienzo.closePath();


//Drawing with a function
function createDraws(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

createDraws("purple", 50, 350, 350, 350);

