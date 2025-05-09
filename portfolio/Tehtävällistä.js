console.log("Tehtävällistä avattu");

let lista = ["Tehtävä 1", "Tehtävä2"];


function paivitaLista() {
    
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        const tarea = lista[i]
        const li = document.createElement("li");
        li.innerHTML = tarea;
        taskList.appendChild(li);
    }
}

function lisaa() {

    const inputElement = document.getElementById("texto");
    const cantidadElemento = document.getElementById("cantidad");
    const nuevaTarea = inputElement.value;
    const cantidad = parseInt(cantidadElemento.value);
    if (!nuevaTarea.trim()) return;
    const toistot = isNaN(cantidad) || cantidad < 1 ? 1: cantidad;
    for (let i = 0; i < toistot; i++) {
        lista.push(nuevaTarea);
    }
    inputElement.value = "";
    cantidadElemento.value = "";
    paivitaLista();
}

const addButton = document.getElementById("addButton");
addButton.onclick = lisaa;
paivitaLista();
