/*
En este desafío recibirás dos números aleatorios por parámetros.
Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:
La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

Input:
sumWithClosure(2)(3);

Output:
5

Input:
sumWithClosure(90)();

Output:
90
*/

export function sumWithClosure(firstNum = 0) {
    // Tu código aquí 👈
    return (secondNum = 0) => {
      return firstNum + secondNum;
    }
  }
  
  sumWithClosure(2)(3);
  
  sumWithClosure(90)();