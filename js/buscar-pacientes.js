var botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click", function(e){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
        var resposta = xhr.responseText;
        console.log(typeof resposta);
        var pacientes = JSON.parse(resposta);
        
        console.log(typeof pacientes);
        console.log(pacientes);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    })
    xhr.send();
});