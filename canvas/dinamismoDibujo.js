//alert('Test')

var d = document.getElementById("dibujoCanvas");
var lienzo = d.getContext("2d");
console.log(lienzo);

var lineas = 400;
var l = 0;
var l2 = 0;

var yI, xF;
var xI, yF;

lienzo.beginPath();
lienzo.strokeStyle = "purple";
lienzo.moveTo(150,250);
lienzo.lineTo(150,150);
lienzo.lineTo(250,250);
lienzo.lineTo(250,150);
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

createDraws("purple", 150, 275, 250, 275);


while(l<lineas){
    yI = 10*l;
    xF = 10*(l+1);
    createDraws("blue", 0, yI, xF, 400);
    console.log("Linea: " + l);
    l = l ++;
}

while(l2<lineas){
    xI = 10*l2;
    yF = 10*(l2+1);
    createDraws("geen", xI, 0, 400, yF);
    console.log("Linea: " + l2);
    l2 = l2 ++;
}
