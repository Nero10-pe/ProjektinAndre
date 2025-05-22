// Muttujat tehtävä
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

// Math Tehtvävä
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


// PäiväJaAika tehtävä
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

// Setit tehtävä
const veijo = new Set(['luku', 'poisto']);
const elvira = new Set(['luku', 'kirjoitus', 'muokkaus']);
const mehdi = new Set(['luku', 'muokkaus', 'poisto']);
const tuuli = new Set(['kirjoitus', 'poisto']);

function naytaOikeudet(nimi, oikeudetSetti) {
  const ul = document.querySelector(`#${nimi} ul`);
  for (let oikeus of oikeudetSetti) {
    const li = document.createElement('li');
    li.textContent = oikeus;
    ul.appendChild(li);
  }
}

naytaOikeudet('Veijo', veijo);
naytaOikeudet('Elvira', elvira);
naytaOikeudet('Mehdi', mehdi);
naytaOikeudet('Tuuli', tuuli);

const veijotuuli = new Set([...veijo, ...tuuli]);
const veijotuuliUl = document.getElementById('veijotuuli');
for (let oikeus of veijotuuli) {
  const li = document.createElement('li');
  li.textContent = oikeus;
  veijotuuliUl.appendChild(li);
}

const mehdielvira = new Set([...mehdi].filter(x => elvira.has(x)));
const mehdielviraUl = document.getElementById('mehdielvira');
for (let oikeus of mehdielvira) {
  const li = document.createElement('li');
  li.textContent = oikeus;
  mehdielviraUl.appendChild(li);
}

const elviratuuli = new Set([
  ...[...elvira].filter(x => !tuuli.has(x)),
  ...[...tuuli].filter(x => !elvira.has(x))
]);
const elviratuuliUl = document.getElementById('elviratuuli');
for (let oikeus of elviratuuli) {
  const li = document.createElement('li');
  li.textContent = oikeus;
  elviratuuliUl.appendChild(li);
}

