function MostrarPresupuesto(){

    var presupuesto = parseInt(document.getElementById("InputPresupuesto").value);
    var meses = parseInt(document.getElementById("InputMeses").value);
    text="";
    for(i=1;i<meses;i++){
    text=text+"Mes: "+i+" Presupuesto acumulado: "+ (presupuesto/meses)*i+"\n";
    }
    var area=document.getElementById("area");
    area.value=text;
}

var btnPresupuesto = document.getElementById("distribuir");
btnPresupuesto.addEventListener("click",MostrarPresupuesto);