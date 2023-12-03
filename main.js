const form = document.getElementById('form'); //Declarando as constante pelo nome do identificador que recebrão o valor
const saldo = document.getElementById('saldo');
const saque = document.getElementById('saque');
const acerto = document.getElementById('saqueRealizado');
const erro = document.getElementById('erro');

function sacandoDinheiro (saldo, saque){ //criando função de comparação
    return saldo > saque;
}

form.addEventListener('submit', function (e){ //criando o evento com botão submit.
    e.preventDefault();

    let validaForm = sacandoDinheiro(saldo.valueAsNumber, saque.valueAsNumber); //criando a varivel para receber os valores inseridos pelo usuario.
    
    
    if(validaForm){ //função de validação para retornar ao usuario. 
        acerto.style.display = 'block';
        saldo.value='';
        saque.value='';

    } 
})
    saque.addEventListener('keyup', function(e){
        
        validaForm = sacandoDinheiro(saldo.valueAsNumber, saque.valueAsNumber);
        if (!validaForm){
    
    erro.style.display= 'block';
    acerto.style.display = 'none';
}
else {
    erro.style.display = 'none';
    
}

    })