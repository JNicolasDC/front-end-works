var texto = document.getElementById("text_lines");
var boton = document.getElementById("button");
boton.addEventListener("click", drawingWhenClick);


var d = document.getElementById("dibujoCanvas");
var lienzo = d.getContext("2d");
console.log(lienzo);
var anchoLienzo = d.width;
console.log(anchoLienzo);


//Drawing with a function
function createDraws(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

//
function drawingWhenClick(){
    //var x = parseInt(texto.value);
    alert("Oprimiste el boton " + lineas);

    var lineas = parseInt(texto.value);
    var l = 0;

    var yI, xF;
    var xI, yF;

    var lineSpacing = anchoLienzo/lineas;

    lienzo.beginPath();
    lienzo.strokeStyle = "purple";
    lienzo.moveTo(150,250);
    lienzo.lineTo(150,150);
    lienzo.lineTo(250,250);
    lienzo.lineTo(250,150);
    lienzo.stroke();
    lienzo.closePath();

    createDraws("purple", 150, 275, 250, 275);

    while(l<lineas){
        yI = lineSpacing*l;
        xF = lineSpacing*(l+1);
        createDraws("blue", 0, yI, xF, 400);
        console.log("Linea: " + l);
        l++;
    }

    for(l2=0 ; l2<lineas ; l2++){
        xI = lineSpacing*l2;
        yF = lineSpacing*(l2+1);
        createDraws("geen", xI, 0, 400, yF);
        console.log("Linea: " + l2);
    }
}