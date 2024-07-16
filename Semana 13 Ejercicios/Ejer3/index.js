'use strict';

/*Escribir una función que reciba como parámetro una frase, 
separar por palabras y devolver en un array las palabras que tengan mas de 3 letras.*/

function filterLongWords(phrase) {
    let words = phrase.split(' ');
    let longWords = words.filter(word => word.length > 3);
    alert(longWords);
}

let phrase = 'La programación web es fundamental para el progreso';
filterLongWords(phrase);