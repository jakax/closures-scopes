//Primero se declarala variable pero se le 
//asigna el valor indefined por eso no puede 
//mostrar el nombre que le asignamos a la variable nameOfDog
/*console.log(nameOfDog); 
var nameOfDog = 'Elmo';
console.log(nameOfDog);
*/

//Esto es lo que sucede en esta funcion
//var elmo; que define como undefined
nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmo';

nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); }; 