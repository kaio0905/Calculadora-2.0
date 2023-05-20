let tela = document.getElementById('input');
function adicionarTela(value){
    tela.value+=value;
}

function apagar(){
    tela.value="";
} 

function soma(){
    tela.value=eval(tela.value);
}