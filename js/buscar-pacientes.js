var botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click", function(e){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    })
    xhr.send();
});