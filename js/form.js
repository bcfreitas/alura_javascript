var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Como alternativa ao método addEventListener, poderíamos usar os atributos event shortcuts nativos do javascript, 
//como onclick, onmouseover, etc. Contudo, é uma BOA PRÁTICA usar o addEventListener porque é possível adicionar várias
//funções de callback para o mesmo evento num mesmo elemento, enquanto que o atributo short event fica restrito a uma unica 
//função.
botaoAdicionar.addEventListener("click", 
        //modo 1: chamar uma função que espera receber
        //um objeto Event (atente que não podemos especificar os parametros).
        //a IDE não saberá na declaração da função que o parâmetro é Event, não terá autoComplete
        //
        //  adicionar
        //
        //modo 2: declarar uma arrow function anônima passando o Event como parâmetro
        //vantagem: a IDE entende que o parâmetro e é um Event, e permite autocomplete;
        //
        //   (e) => {e.preventDefault(); console.log("adiconar clicado!");}
        //
        //modo 3: declarar uma função padrão anônima que receberá como parâmetro o Event
        //vantagem: a IDE entende que o parâmetro e é um Event, e permite autocomplete;
        //
           function(e){ 
                e.preventDefault();

                var form = document.querySelector("#form-adiciona");

                var novoPaciente = obtemDadosDoFormulario(form);
                
                var erros = validaPaciente(novoPaciente);

                if(erros.length>0){
                    exibeMensagensDeErro(erros);
                    return;
                }

                adicionaPacienteNaTabela(novoPaciente);
                
                form.reset();
                //limpa possiveis mensagens de erro;
                document.querySelector("#mensagens-erro").innerHTML="";
                console.log("adicionar clicado");
            }
        //modo 4: declarar uma função anônima sem parâmetros e utilizar a variável event
        //a variável event esá deprecated (proveniente da MS), pode ocorrer incompatibilidades. Usar o objeto Event em lugar.
        //
        //    function(){
        //        event.preventDefault();
        //        console.log("adicionar clicado");
        //      }
);

function adicionar(e){
    e.preventDefault();
    console.log("adicionar clicado");
}

function obtemDadosDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(this.peso, this.altura)
    }
    return paciente;
}

function montaTr(novoPaciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(novoPaciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(novoPaciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(novoPaciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(novoPaciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(novoPaciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr =  montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    //limpa mensagens anteriores
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    
}
