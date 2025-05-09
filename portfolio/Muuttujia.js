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