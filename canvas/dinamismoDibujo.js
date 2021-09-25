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