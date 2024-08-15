/*
Cadena de texto que devuelve la longitud--------
var string =prompt("Ingresa el texto");
console.log("El texto es: "+ string+" con una longitud de "+string.length);
*/

/* convertir mauisculas y minusculas----------------
var mayusculas =prompt("Ingresa texto en mayuscula");
console.log(mayusculas.toLowerCase());

var minuscula =prompt("Ingresa texto en munuscula");
console.log(minuscula.toUpperCase());
*/

/* crear fecha----------------
var dia =prompt("Ingresa el dia");
var mes =prompt("Ingresa el mes");
var año =prompt("Ingresa el año");

console.log(dia+"/"+mes+"/"+año);
*/
function Cadena(){
    var cadena = prompt("Ingresa el texto");
    separar = cadena.split("");
    console.log("el primer parametro es: "+separar[0]);
    
}
//Cadena();

var nombrecompleto ="";
function SolicitarNombreCompleto(){

var nombre = prompt("Ingresa tu nombre");
var apellidoP = prompt("Ingresa tu apellido Paterno");
var apellidoM = prompt("Ingresa tu apellido Materno");
nombrecompleto = nombre+" "+apellidoP+" "+apellidoM;
//console.log("Tu nombre completo es: "+ resultado);
}

function ContarPalabras(){
    SolicitarNombreCompleto();
    cadenasinespacios= nombrecompleto.trim();
    console.log("La cadena sin espacios es :"+cadenasinespacios);
    arreglopalabras = cadenasinespacios.split(/\s+/);
    console.log("El arreglo quedo de la siguiente forma "+arreglopalabras);
    numerodepalabras=arreglopalabras.length;
    console.log("el numero de palabras es "+ numerodepalabras);
}
function cadenas(){
    var cadena1 = prompt("Ingresa el primer texto");
    var cadena2 = prompt("Ingresa el segundo texto");

    cadena1se = cadena1.split("");
    cadena2se = cadena2.split("");

    longcadena1 = cadena1se.length;
    longcadena2 = cadena2.length;

    if(longcadena1>longcadena2){
        console.log("el primer texto es mayor  "+longcadena1);
    }
    if(longcadena2>longcadena1){
        console.log("el segundo arreglo es mayor  "+longcadena2);
    }
   // console.log("el primer parametro de primer texto es: "+cadena1se[0]);
    //console.log("el primer parametro del segundo texto es: "+cadena2se[0]);

    
}
cadenas();
//ContarPalabras();