//Array asociativo=Object (Con valores de cadena, se recorre con un of)
var images = [];
images["Cow"] = "cow.png"
images["Chicken"] = "chicken.png"
images["Pig"] = "pig.png"



/*
JS ON = Array asociativo
var images={
    Cow: "cow.png"
    Chicken: "chicken.png"
    Pig: "pig.png"
}
*/



/*
var cow = new Characters("Cow", 100, 30);
var chicken = new Characters("Chicken", 80, 50)
var pig = new Characters("Pig", 90, 40)

console.log(cow, chicken, pig);
*/



//Array numeroco, se recorre con un in
var collection = [];
collection.push(new Characters("Cow", 100, 30));
collection.push(new Characters("Chicken", 80, 50));
collection.push(new Characters("Pig", 90, 40));

console.log(collection);



//Itera sobre el objeto
for(var Collvar of collection){
    Collvar.showImage();
}
//Itera sobre el indice
for(var Col in images[0]){
    console.log(Col);
}