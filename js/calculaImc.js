var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i<pacientes.length;i++){
    var pesoEhValido = true;
    var alturaEhValida = true;

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if(peso < 0 || peso > 150){
        console.log("peso invalido");
        tdImc.textContent = "Peso Inválido!"
        pesoEhValido = false;

        paciente.classList.add("paciente-invalido");
    }
    
    if(altura < 0){
        console.log("altura invalida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;

        paciente.classList.add("paciente-invalido");

    }
    
    if(pesoEhValido && alturaEhValida){    
        tdImc.textContent = calculaImc(peso, altura);
    }
    
    console.log(paciente); //tr
    console.log(tdPeso);
    console.log(peso);
    console.log(altura);

    function calculaImc(peso, altura){
        var imc = peso / (altura * altura);  
        return imc.toFixed(2);      
    }

}

