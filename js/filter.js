var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    for(var i = 0; i<pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        if(nome!=this.value && this.value.length>0){
            tdNome.parentNode.classList.add("invisivel");
        } else {
            tdNome.parentNode.classList.remove("invisivel");
        }
    }
});