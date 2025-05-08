console.log("Tehtävällistä avattu");

let lista = ["Tehtävä 1", "Tehtävä2"];


function paivitaLista() {
    
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        const tarea = lista[i];

        
        const li = document.createElement("li");

        
        li.innerHTML = tarea;

        
        taskList.appendChild(li);
    }
}

function lisaa() {

    const inputElement = document.getElementById("myInput");
    const nuevaTarea = inputElement.value;

    lista.push(nuevaTarea);

    paivitaLista();

    inputElement.value = "";

}

const addButton = document.getElementById("addButton");
addButton.onclick = lisaa;

paivitaLista();