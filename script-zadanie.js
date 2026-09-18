/// Zad.1
let a = prompt("Podaj liczbę a");
let b = prompt("Podaj liczbę b");
let c = prompt("Podaj liczbę c");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let sum = a + b + c;
let count = 3;
let avg = sum / count;

document.writeln(`<p>Suma: ${a} + ${b} + ${c} = ${sum} </p>`);

// Zad.2
document.writeln(`<p>Średnia: ${avg}</p>`);

// Zad.3
let sum2 = a + b;
let diff2 = a - b;
let multi2 = a * b;

document.writeln(`<p>${a} + ${b} = ${sum2}</p>`);
document.writeln(`<p>${a} - ${b} = ${diff2}</p>`);
document.writeln(`<p>${a} * ${b} = ${multi2}<p>`);

// Zad.4
let sqrt3 = Math.sqrt(a);

document.writeln(`<p>Pierwiastek z ${a}: ${sqrt3}</p>`);

// Zad.5
let square4 = a * a;
// Zad.6
let thing3d = a * b + a * c + b * c;

document.writeln(`<p>Pole kwadratu z boku ${a}: ${square4}</p>`);
document.writeln(`<p>Pole prostopadłościanu (a: ${a}, b: ${b}, h: ${c}): ${thing3d}</p>`)

// Zad.7
let circle = Math.PI * Math.pow(a, 2);
let circle2 = 2 * Math.PI * a;

document.writeln(`<p>Pole koła o promieniu ${a}: ${circle}</p>`);
document.writeln(`<p>Obwód koła o promieniu: ${a}: ${circle2}</p>`);

// Zad.8
const CENA_BENZYNY = 7.81; // za litr
let km = 360;
let l_per_km = 8.0 / 100.0;
let price = CENA_BENZYNY * l_per_km * 360.0;

document.writeln(`<p>Koszt przejazdu z Gdańska do Szczecina (${CENA_BENZYNY}pln/l, ${l_per_km}l/km): ${price}pln</p>`);

// Zad.9
let trasa = parseFloat(prompt("Podaj trasę w KM"));
let spalanie_samochodu = parseFloat(prompt("Podaj Spalanie samochodów (ile km na litr)"));
spalanie_samochodu = 1.0 / spalanie_samochodu;
let price2 = CENA_BENZYNY * spalanie_samochodu * trasa;

document.writeln(`<p>Koszt przejadu ${trasa} km z spalaniem ${spalanie_samochodu}/km: ${price2}</p>`);

// Zad.10
let money1 = a * 0.08
let money2 = money1 * 0.81

document.writeln(`<p>zysk z lokaty, oprocentowanie 8% z podatkiem belki z ${a} pln: ${money2} pln</p>`);
