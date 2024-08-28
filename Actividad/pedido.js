class pedido{
    nombre;
    direccion;
    codigoPostal;
    modelo;
    cantidad;
    costo;

    constructor(nombre,direccion,codigoPostal,modelo,cantidad,costo){
        this.nombre=nombre;
        this.direccion=direccion;
        this.codigoPostal=codigoPostal;
        this.modelo=modelo;
        this.cantidad=cantidad;
        this.costo=costo;
    }
}

function calcularCosto(){

   var modeloBalon = parseInt(document.getElementById("idModelo").value);
   var cantidadBalon = document.getElementById("idCantidad").value;
  
    var calcularCosto = modeloBalon*cantidadBalon;
    document.getElementById("idPago").value=calcularCosto;

    
}
function mensaje(){
    var direccionPedido = document.getElementById("idDireccion").value;
    var codigoPostalPedido = document.getElementById("idCodigo").value;

    text="";
    text=text+"Tu pedido se realizo correctamente,serà enviado a la direccion "+direccionPedido+" "+ codigoPostalPedido+"\n"+"Gracias por tu compra";
    var area=document.getElementById("area");
    area.value=text;
}
var btnCalcular = document.getElementById("btncosto");
btnCalcular.addEventListener("click",calcularCosto);

var btnMensaje = document.getElementById("idRegistrar");
btnMensaje.addEventListener("click", mensaje);