var vp = document.getElementById("myFarm");
var paper = vp.getContext("2d");

var mapa = "tile.png";

var cow = {
  url: "cow.png",
  cargaOk: false
};

var background = new Image();
background.src = mapa;
background.addEventListener("load", loadingBackground);

var chicken = new Image();
chicken.src = "chicken.png";
chicken.addEventListener("load", loadingChickens);

cow.objecto = new Image();
cow.objecto.src = "cow.png";
cow.objecto.addEventListener("load", loadingCows);

var pig = new Image();
pig.src = "pig.png";
pig.addEventListener("load", loadingPigs);



function loadingBackground(){
  paper.drawImage(background, 0, 0);
}

function loadingChickens(){
  paper.drawImage(chicken, 300, 300);
}

function loadingCows(){
  paper.drawImage(cow, 340, 200);
}

function loadingPigs(){
  paper.drawImage(pig, 250, 25);
}


console.log(aleatorio(5, 10))

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}







/*
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
*/