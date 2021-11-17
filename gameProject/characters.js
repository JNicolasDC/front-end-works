class Characters{
    constructor(name, life, attack){
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.tipo = "vegetariano";
    }
}

var cow = new Characters("Cow", 100, 30);
var chicken = new Characters("Chicken", 80, 30)

console.log(cow, chicken);