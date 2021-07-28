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
    document.getElementById('produtoList').innerHTML = localStorage.getItem('nomeProduto', JSON.stringify(nomeProduto))
}


window.onload=function(){

document.getElementById("produtoList").addEventListener("button", function (e) {
   document.getElementById('produtoList').button(listaProdutos());
   listaProdutos();
   e.preventDefault();
   
 });
}

function removeProdutos(){

   localStorage.removeItem('nomeProduto')
}


window.onload=function(){

document.getElementById("listaProdutos").addEventListener("remove", function () {
   document.getElementById('listaProdutos').remove(removeProdutos());
   removeProdutos();
   
 });
}