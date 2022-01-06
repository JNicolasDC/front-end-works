const API_URL = "https://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();

//Funcion manejadora - Callback
function requestHandler(){ // Manejador de la peticion
    //Peticion AJAX a un servicio web
    if(this.readyState == 4 && this.status == 200){
        // 0 = UNSET, No se ha llamado al metodo open()
        // 1 = OPEN, Se ha llamado al metodo open() de el objeto xhr
        // 2 = HEADERS_RECIVED, Se esta llamando al metodo send()
        // 3 = LOADING, Esta cargando, es decir, esta recibiendo la respuesta
        // 4 = DONE, Se ha completado la operacion

        //console.log(this.response); //Para imprimir por consola en formato text
        const data = JSON.parse(this.response); //Para convertirlo en un objeto JSON
        //console.log (data);
        

        //Para pintar el API, insertar en el div app, la respuesta que escribiremos en formato HTML
        const HTMLResponse = document.querySelector("#app")
        //Para iterar esos datos
        const template = data.map(user => <li>${user.name} ✉️ ${user.email}</li>)
        HTMLResponse.innerHTML = <ul>${tpl}</ul>
    }
}



xhr.addEventListener("load", requestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();