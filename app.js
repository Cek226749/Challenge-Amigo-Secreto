
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let nombreInput = document.getElementById("amigo");
    let nombre = nombreInput.value.trim();

    if (nombre !== ""){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombre;
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.appendChild(nuevoAmigo);
        nombreInput.value = "";
    } else {
        alert("Introduce algún nombre en el cuadro de texto");
    }
} 

function sortearAmigo(){
    let listaAmigos = document.getElementById("listaAmigos");
    let nombresAmigos = listaAmigos.getElementsByTagName("li");

    if (nombresAmigos.length > 0){
        let indiceAletorio = Math.floor(Math.random()* nombresAmigos.length);
        let amigoSorteado = nombresAmigos[indiceAletorio].textContent;
        //alert(`El amigo sorteado es: ${amigoSorteado}`);
        asignarTextoElemento('ul',`El amigo sorteado es: ${amigoSorteado}`);
    } else {
        alert("No hay nombres almacenados en la lista")

    }
}
