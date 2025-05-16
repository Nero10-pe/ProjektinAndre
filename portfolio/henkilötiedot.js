console.log("henkilötiedot avattu")

let henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
];

henkilot.push(
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    }
);


const rivit = document.getElementById("rivit");

function luoRivit() {
    
    rivit.innerHTML = "";

    for (let i = 0; i < henkilot.length; i++) {
        const henkilö = henkilot[i];

        const rivi = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.innerHTML = henkilö.name;
        rivi.appendChild(tdName);

        let tdAge = document.createElement("td");
        tdAge.innerHTML = henkilö.age;
        rivi.appendChild(tdAge);

        let tdJob = document.createElement("td");
        tdJob.innerHTML = henkilö.job;
        rivi.appendChild(tdJob);

        let tdDriversLicense = document.createElement("td");
        tdDriversLicense.innerHTML = henkilö.driversLicense ? "Kyllä" : "Ei"; 
        rivi.appendChild(tdDriversLicense);

        rivit.appendChild(rivi);
    }
}

luoRivit();

document.getElementById("submitButton").addEventListener("click", lähetä);

function lähetä() {
    const nimi = document.getElementById("nimi").value.trim();
    const ikaStr = document.getElementById("ika").value.trim();
    const tyo = document.getElementById("tyo").value.trim().toLowerCase();  
    const ajokortti = document.getElementById("ajokortti").checked;

    if (ikaStr === "" || isNaN(ikaStr)) {
        alert("Ikä on pakollinen ja pitää ollaa numeroa");
        return;
    }

    const ikä = Number(ikaStr);
    if (ikä < 0) {
        alert("Ikä ei voi olla negatiivinen.");
        return;
    }

    let ikaemoji = ikä >= 18 ? "🍺" : "";
    let tyoemoji = tyo.includes('opiskelija') ? "🎓" : "";

    const taulu = document.getElementById("tulostaulu");
    const rivi = taulu.insertRow(-1);

    rivi.insertCell(0).textContent = nimi;
    rivi.insertCell(1).textContent = ikä + " " + ikaemoji;;
    rivi.insertCell(2).textContent = tyo + " " + tyoemoji; 
    rivi.insertCell(3).textContent = ajokortti ? "true" : "false";
}