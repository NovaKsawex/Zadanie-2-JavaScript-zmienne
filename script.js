//==============================================================
// Comments

// Hello world! :3
/*
Wooooow, it's not like i know this stuff already

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

and already played with this many times :3
*/

//==============================================================
// Document writing and console logging
document.write("<p><b>HELLO</b></p>\n");
document.writeln("<p>Im burning</p>");
console.log("Hai :3");
console.log("Hai :3");
console.log("test" + "test");
console.log("test", "test");
console.log(`${"test"} test ${'test'} ${`test`}`)

//==============================================================
// Variables and Constants

var test1 = "Im ducked"; // Global scope variable, modifyable anywhere, can't create 2 vars with same name
let test2 = "Im ducked"; // Global scope variable, modifyable anywhere, can shadow variables with same name
const TEST3 = "Im ducked"; // Global scope constant, can't be modified

function testing() { // This is a function :3, check section below
    console.log("Testing");
    console.log(test1);
    console.log(test2);
    console.log(TEST3);

    test1 = "Duck";
    test2 = "Duck";
    //TEST3 = "DUCK";
    //Uncaught TypeError: invalid assignment to const 'TEST3'

    //var test1 = "Duck";
    //Uncaught SyntaxError: redeclaration of var test1
    let test3 = "Duck";
    if (true) {
        let test3 = "Fuck";
    }
    console.log(test3)
}

testing();
testing();

//==============================================================
// Functions 

function add(a, b) {
    return a + b;
}

function first_d_to_f(string) {
    let pos = string.search("d");

    string = string.substring(0, pos) + "f" + string.substring(pos + 1);

    return string;
}

function say_hello() {
    console.log("Hello :3");
}

let str = "Im ducked"
let a = 1;
let b = 2;

console.log(`1 + 2 = ${add(1, 2)}`);
console.log(`d to f: "${str}"  result: "${first_d_to_f(str)}"`);

document.writeln(`<p>${a} + ${b} = ${add(a, b)}</p>`);
document.writeln(`d to f: "${str}"  result: "${first_d_to_f(str)}"`);

say_hello();

//==============================================================
// Type changing
let number1 = '10', number2 = '4.5';
let inumber1 = parseInt(number1);
let inumber2 = parseInt(number2);
let fnumber1 = parseFloat(number1);
let fnumber2 = parseFloat(number2);

console.log(`Changing 2 numbers to int and float and adding (string inluded)`);
console.log(`String: "${number2}" + "${number1}" = "${number1 + number2}"`);
console.log(`Integer: ${inumber1} + ${inumber2} = ${inumber1 + inumber2}`);
console.log(`Float ${fnumber1} + ${fnumber2} = ${fnumber1 + fnumber2}`);

// Number to string
let snumber1 = `${fnumber1}`;
let snumber2 = `${fnumber2}`;

console.log(`Floats back to string: "${snumber1}" "${snumber2}"`);

//==============================================================
// Basic math
let n1 = 13;
let n2 = 3;

document.writeln(`<p>${n1} + ${n2} = ${n1 + n2}`);
document.writeln(`<p>${n1} - ${n2} = ${n1 - n2}`);
document.writeln(`<p>${n1} * ${n2} = ${n1 * n2}`);
document.writeln(`<p>${n1} / ${n2} = ${n1 / n2}`);
document.writeln(`<p>${n1} % ${n2} = ${n1 % n2}`);

//POWER
document.writeln(`<p>${n1} ^ ${n2} = ${Math.pow(n1, n2)}`);
document.writeln(`<p>${n1} ^ ${2} = ${Math.sqrt(n1)}`);

//==============================================================
// Math rounding, flooring and ceiling
let e = 2.718281828459045235360287471352;

console.log(`number: ${e}`);
console.log(`Rounded: ${Math.round(e)}`);
console.log(`Floor: ${Math.floor(e)}`);
console.log(`Ceiling: ${Math.ceil(e)}`);

//==============================================================
// cool floating error
let f1 = 0.1;
let f2 = 0.2;

console.log(`${f1} + ${f2} = ${f1 + f2}`);
document.writeln(`<p>${f1} + ${f2} = ${f1 + f2}</p>`);

//==============================================================
// RANDOM :3

document.writeln(`<p>Random number: ${Math.random()}</p>`);
document.writeln(`<p>Random number 1-100: ${Math.round(Math.random() * 100)}</p>`);
document.writeln(`<p>Random number 1.0-100.0: ${Math.random() * 100.0}</p>`);

//==============================================================
// Types

let l = true, m = false; // Boolean :3

document.writeln(`<p>"${test1}": ${typeof(test1)}</p>`);
document.writeln(`<p>"${n1}": ${typeof(n1)}</p>`);
document.writeln(`<p>"${e}": ${typeof(e)}</p>`);
document.writeln(`<p>"${l}": ${typeof(l)}</p>`);

// Im tired :3
// This is kinda boring, i could be writing some Rust, trying out bevy again, trying some other shit, writing some Avali Scratch
// or whatever
//
// BUT WHY THE HELL IS THERE NO emacs ON SCHOOL PC/Laptop's ??????
// GNU emacs are a text editor in the most common sense avaible for linux, windows and macos and other
// emacs are so customizable that some call it it's own operating system beacuse of the amount of stuff you can do in it
//
// Btw i wrote this shit mostly of off my mind
// No GAI (Generative Artificial "Intelligence" or Idiot) was used