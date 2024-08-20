function sumar(){
var numero1 = parseInt(document.getElementById("numero1").value);
var numero2 = parseInt(document.getElementById("numero2").value);

resultado= numero1+numero2;

var area= document.getElementById("area");
area.value="El resultado de la suma es: "+resultado;

limpiar();
}
function restar(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    
    resultado= numero1-numero2;
    
    var area= document.getElementById("area");
    area.value="El resultado de la suma es: "+resultado;
    
    limpiar();
    }
    function multiplicar(){
        var numero1 = parseInt(document.getElementById("numero1").value);
        var numero2 = parseInt(document.getElementById("numero2").value);
        
        resultado= numero1*numero2;
        
        var area= document.getElementById("area");
        area.value="El resultado de la suma es: "+resultado;
        
        limpiar();
        }
        function dividir(){
            var numero1 = parseInt(document.getElementById("numero1").value);
            var numero2 = parseInt(document.getElementById("numero2").value);
            
            resultado= numero1/numero2;
            
            var area= document.getElementById("area");
            area.value="El resultado de la suma es: "+resultado;
            
            limpiar();
            }

function limpiar(){

var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
numero1.value="";
numero2.value="";
}