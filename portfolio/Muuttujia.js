let a = 3;
let b = 5;
let c = 7;
let d = 15;


function summa() {
    alert(a + b);
}

function vahennys() {
    alert(b - c);
}

function kerto() {
    alert(c * d);
}

function jako() {
    alert(d / a);
}

function laskin_summa() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    alert(summa(eka, toka));
}

function laskin_vahennys() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    alert(vahennys(eka, toka));
}

function laskin_kerto() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    alert(kerto(eka, toka));
}

function laskin_jako() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    if (toka !== 0) {
        alert(jako(eka, toka));
    } else {
        alert("Nolla ei voi olla jakajana.");
    }
}

function summaCalc(a, b) {
    return a + b;
}

function vahennysCalc(a, b) {
    return a - b;
}

function kertoCalc(a, b) {
    return a * b;
}

function jakoCalc(a, b) {
    return a / b;
}