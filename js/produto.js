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

function listaProdutos(){
    var nomeProduto = document.getElementById('nomeProduto').value;
      
   localStorage.setItem('nomeProduto', JSON.stringify(nomeProduto))
}


window.onload=function(){

document.getElementById("form-produtos").addEventListener("submit", function () {
   document.getElementById('form-produtos').submit(listaProdutos());
   listaProdutos();
   
 });
}

function removeProdutos(){
    var nomeProduto = document.getElementById('nomeProduto').value;
      
   localStorage.setItem('nomeProduto', JSON.stringify(nomeProduto))
}


window.onload=function(){

document.getElementById("form-produtos").addEventListener("submit", function () {
   document.getElementById('form-produtos').submit(removeProdutos());
   removeProdutos();
   
 });
}