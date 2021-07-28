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

function listaUser(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var adress = document.getElementById('adress').value;
    

    getElementById('').innerHTML= localStorage.getItem('nome', JSON.stringify(nome))   
    = localStorage.getItem('email', JSON.stringify(email))
    = localStorage.getItem('adress', JSON.stringify(adress))
}


window.onload=function(){

document.getElementById("form-clientes").addEventListener("submit", function () {
   document.getElementById('form-clientes').submit(listaUser());
   listaUser();
   
 });
}

function removeUser(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var adress = document.getElementById('adress').value;
    

    localStorage.setItem('nome', JSON.stringify(nome))   
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('adress', JSON.stringify(adress))
}


window.onload=function(){

document.getElementById("form-clientes").addEventListener("submit", function () {
   document.getElementById('form-clientes').submit(removeUser());
   removeUser();
   
 });
}
