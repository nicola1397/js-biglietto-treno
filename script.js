// RICHIESTA/DEFINIZIONE ANNI E CONSOLE LOG
const anni = parseInt(prompt("Inserisci la tua età:"));
console.log(anni);
// RICHIESTA/DEFINIZIONE DISTANZA E CONSOLE LOG
const distance = parseInt(prompt("Inserisci la distanza da percorrere:"));
console.log(distance);
// DEFINIZIONI VARIABILI
let price;
let discounted;
let sconto;

// CONTROLLO ERRORI
if (isNaN(anni) || isNaN(distance) || anni <= 0 || distance <= 0) {
  alert("I dati inseriti non sono corretti!");
}
// SCONTO MINORENNI
else if (anni < 18) {
  price = (distance * 0.21).toFixed(2);
  console.log(price);
  sconto = "20%";
  console.log(sconto);
  13;
  discounted = (price - (price / 100) * 20).toFixed(2);
  console.log(discounted);
}
// SCONTO OVER 65
else if (anni > 65) {
  price = (distance * 0.21).toFixed(2);
  console.log(price);
  sconto = "40%";
  console.log(sconto);
  discounted = (price - (price / 100) * 40).toFixed(2);
  console.log(discounted);
}
// TARIFFA STANDARD
else {
  price = parseFloat((distance * 0.21).toFixed(2));
  console.log(price);
  sconto = "Nessuno";
  discounted = price;
  console.log(discounted);
}
// DISPLAY DEI VALORI IN HTML
document.getElementById("eta").innerText = anni + " " + "anni";
document.getElementById("km").innerText = distance + " " + "km";
document.getElementById("price").innerText = price + "€";
document.getElementById("percentage").innerText = sconto;
document.getElementById("priceNew").innerText = discounted + "€";
