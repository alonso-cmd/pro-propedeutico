class Persona{
    nombre;
    apellidoPaterno;
    apellidoMaterno;
    Nacimiento;
    Nacionalidad;
    Puesto;
    Salario;

    constructor(nombre, apellidoPaterno,apellidoMaterno,Nacimiento,Nacionalidad,Puesto,Salario){
this.nombre=nombre;
this.apellidoPaterno=apellidoPaterno;
this.apellidoMaterno=apellidoMaterno;
this.Nacimiento=Nacimiento;
this.Nacionalidad=Nacionalidad;
this.Puesto=Puesto;
this.Salario=Salario;
    }
}
var btnRegistar = document.getElementById("registar");
btnRegistar.addEventListener("click",agregarPersona);

function agregarPersona(){
    let nombre= document.getElementById("nombre").value;
    let apellidoPaterno= document.getElementById("apellidoPaterno").value;
    let apellidoMaterno= document.getElementById("apellidoMaterno").value;
    let Nacimiento= document.getElementById("fechaNaciemiento").value;
    let Nacionalidad= document.getElementById("Nacionalidad").value;
    let Puesto= document.getElementById("Puesto").value;
    let Salario= document.getElementById("Salario").value;

    console.log(nombre);
    console.log(apellidoPaterno);
    console.log(apellidoMaterno);
    console.log(Nacimiento);
    console.log(Nacionalidad);
    console.log(Puesto);
    console.log(Salario);

   let persona= new Persona(nombre, apellidoPaterno, apellidoMaterno, Nacimiento, Nacionalidad, Puesto, Salario ); 
    console.log(persona); 

}