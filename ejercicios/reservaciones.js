
class reserva{
    nombre;
    hotel;
    personas;
    fechaIn;
    fechaFin;
    costo;

    constructor(nombre,hotel,personas,fechaIn,fechaFin,costo){
        this.nombre=nombre;
        this.hotel=hotel;
        this.personas=personas;
        this.fechaIn=fechaIn;
        this.fechaFin=fechaFin;
        this.costo=costo;
    }
}
/* calcular costo por persona-------------
function calcularCosto(){
    var NoPersonas = parseInt(document.getElementById("personas").value);
    var calcular = NoPersonas*500;
    document.getElementById("costo").value=calcular;
}
    */

function calcularcosto(){
    var FechaIn = document.getElementById("fechain").value;
    var FechaFin = document.getElementById("fechafin").value;
    costo= document.getElementById("costo");
    precio = 1000;

    let milisegundos = new Date(FechaFin)- new Date(FechaIn);
    let dias = milisegundos/(1000*60*60*24);
    costo.value=dias*precio;
}

var btnCalcular = document.getElementById("btncosto");
btnCalcular.addEventListener("click",calcularcosto);

function reservacion(){

    var Nombre = document.getElementById("reserva").value;
    var Hotel = document.getElementById("hotel").value;
    var Personas = parseInt(document.getElementById("personas").value);
    var FechaIn = document.getElementById("fechain").value;
    var FechaFin = document.getElementById("fechafin").value;
    var Costo = document.getElementById("costo").value;

    let reservacion = new reserva(Nombre,Hotel,Personas,FechaIn,FechaFin,Costo);
    console.log(reservacion);

}
var btnRegistrar = document.getElementById("registrar");
btnRegistrar.addEventListener("click",reservacion);