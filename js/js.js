function cadastraUser(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var adress = document.getElementById('adress').value;
    

    localStorage.setItem('nome', JSON.stringify(nome))   
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('adress', JSON.stringify(adress))
}


window.onload=function(){

document.getElementById("form-clientes").addEventListener("submit", function () {
   document.getElementById('form-clientes').submit(cadastraUser());
   cadastraUser();
   
 });
}

function cadastraProdutos(){
    var nomeProduto = document.getElementById('nomeProduto').value;
      
   localStorage.setItem('nomeProduto', JSON.stringify(nomeProduto))
}


window.onload=function(){

document.getElementById("form-produtos").addEventListener("submit", function () {
   document.getElementById('form-produtos').submit(cadastraProdutos());
   cadastraProdutos();
   
 });
}