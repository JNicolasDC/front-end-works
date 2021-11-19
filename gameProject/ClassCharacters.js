class Characters{
    
    constructor(name, life, attack){
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.tipo = "vegetariano";
        this.image = new Image();

        this.image.src = images[this.name];
    }



     talking(){
         alert(this.name)
     }

     showImage(){
         document.body.appendChild(this.image);
         document.write("<p>");
         document.write("<strong>"+this.name+"</strong><br />");
         document.write("Vida: "+this.life+"<br />");
         document.write("Ataque: "+this.attack+"<hr />");
         document.write("</p>");
     }
}