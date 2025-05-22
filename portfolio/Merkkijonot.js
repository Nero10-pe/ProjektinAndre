console.log("Merkkijonot avattu");

// 
function Poimi() {
    const palabra = document.getElementById("palabra1").value;
    const numero = parseInt(document.getElementById("numero1").value);
    const resultado = document.getElementById("tulos");

    const posicion = numero - 1;
    resultado.textContent = palabra[posicion]
}

function Indeksi() {
    const palabra = document.getElementById("palabra2").value;
    const letra = document.getElementById("palabra3").value;
    const resultado = document.getElementById("tulos2");

    const posicion = palabra.indexOf(letra);
    resultado.textContent = posicion + 1;
}

function Merkkijono() {
    const palabra = document.getElementById("palabra4").value;
    const letra1 = parseInt(document.getElementById("numero2").value);
    const letra2 = parseInt(document.getElementById("numero3").value);
    const resultado = document.getElementById("tulos3");

    const inicio = Math.min(letra1,letra2) - 1;
    const fin = Math.max(letra1, letra2);
    
    const fragmento = palabra.slice(inicio, fin + 1)
    resultado.textContent = fragmento;
}

function Etsi() {
    const palabra = document.getElementById("palabra5").value;
    const palabra1 = document.getElementById("palabra6").value;
    const palabra2 = document.getElementById("palabra7").value;
    const resultado = document.getElementById("tulos4");

    const nuevo = palabra.replace(palabra1, palabra2);
    resultado.textContent = nuevo;

}

function Poikki() {
    const palabra = document.getElementById("palabra8").value;
    const letra = document.getElementById("palabra9").value;
    const resultado = document.getElementById("tulos5");

    resultado.innerHTML = "";
 
    const partes = palabra.split(new RegExp(letra, "i"));

    partes.forEach(parte => {
        const item = document.createElement("li");
        item.textContent = parte;
        resultado.appendChild(item);
    });
}