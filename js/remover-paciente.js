var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(e){
    e.target.parentNode.classList.add("fade-out");
    setTimeout(function(){
        (e.target).parentNode.remove();
    }, 500);
});