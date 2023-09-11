// variables

var a; // declaracion
var b = 'b'; // declaracion y asignacion
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Argentina'; //global
    console.log(country);
}

countries();
console.log(country);