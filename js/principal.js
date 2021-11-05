var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i<pacientes.length;i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if(peso < 0 || peso > 1000){
        console.log("peso invalido");
    }
    
    if(altura < 0){
        console.log("altura invalida");
    }
    
    var imc = peso / (altura * altura);
    
    
    tdImc.textContent = imc.toFixed(2);
    
    console.log(paciente); //tr
    console.log(tdPeso);
    console.log(peso);
    console.log(altura);
    console.log(imc);

}

