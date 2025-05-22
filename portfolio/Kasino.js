console.log("Kasino avattu");

// Random Tehtävä
function Noppa() {
    const tulos = Math.floor(Math.random() * 6) + 1; 
    document.getElementById("noppa").textContent = "Tuloksesi on: " + tulos;
}


function Lotto() {
    let arvotut = new Set();
    while (arvotut.size < 7) {
        const numero = Math.floor(Math.random() * 40) + 1; 
        arvotut.add(numero);
    }
    const numerot = [...arvotut]
    document.getElementById("lotto").textContent = "Arvotut numerot: " + numerot.join(", ");
}

