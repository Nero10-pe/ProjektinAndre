let a = 3;
let b = 5;
let c = 7;
let d = 15;


function summa(a,b) {
    alert("Summa: " + (a + b));
}

function vahennys(b,c) {
    alert("Vahennys: " + (b - c));
}

function kerto(c,d) {
    alert("Kerto:" + (c * d));
}

function jako(d,a) {
    alert("Jako: " + (d / a));
}

function laskin_summa() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    summa(eka, toka)
}

function laskin_vahennys() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    vahennys(eka, toka)

}

function laskin_kerto() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    kerto(eka, toka)
}

function laskin_jako() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    if (toka !== 0) {
        jako(eka, toka);
    } else {
        alert("Nolla ei voi olla jakajana.");
    }
}

function Abs() {
    const eka = parseFloat(document.getElementById('numero1').value);
    alert("Abs : " + Math.abs(eka)) 
}

function Sqrt() {
    const eka = parseFloat(document.getElementById('numero1').value);
    alert("Sqrt : " + Math.sqrt(eka)) 
}

function Pow() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    alert("Pow : " + Math.pow(eka, toka)) 
}

function Max() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    alert("Max : " + Math.max(eka, toka)) 
}

function Min() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    alert("Min : " + Math.min(eka, toka)) 
}

function Round() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    alert("Round : " + Math.round(eka, toka)) 
}



function PäiväJaAika() {
    var nykyhetki = new Date();

    var viikonpäivät = [
        "sunnuntai", "maanantai", "tiistai", "keskivikko", "torstai", "perjantai", "lauantai"
    ];

    var paiva = viikonpäivät[nykyhetki.getDay()];
    var pvm = nykyhetki.toLocaleDateString("fi-FI", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    var aika = nykyhetki.toLocaleTimeString("fI-FI");
    var viesti = "Täänän on " + paiva + ", " + pvm + ", ja kello on " + aika;
    document.getElementById("tulos").innerText = viesti;   

}



const veijo = new Set(['luku', 'poisto']);
const elvira = new Set(['luku', 'kirjoitus']);
const mehdi = new Set(['luku', 'muokkaus']);
const tuuli = new Set(['kirjoitus', 'poisto']);

function addPermission(user, id) {
 
}

