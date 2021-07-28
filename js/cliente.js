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
    

    document.getElementById('nomeList').innerHTML = localStorage.getItem('nome', JSON.stringify(nome))   
    document.getElementById('emailList').innerHTML = localStorage.getItem('email', JSON.stringify(email))
    document.getElementById('adressList').innerHTML = localStorage.getItem('adress', JSON.stringify(adress))
}


window.onload=function(){

document.getElementById("listaClientes").addEventListener("button", function (e) {
   document.getElementById('listaClientes').button(listaUser());
   listaUser();
   e.preventDefault();
   
 });
}

function removeUser(){
    localStorage.removeItem('nome')   
    localStorage.removeItem('email')
    localStorage.removeItem('adress')
}

window.onload=function(){

document.getElementById("listaClientes").addEventListener("submit", function () {
   document.getElementById('listaClientes').submit(removeUser());
   removeUser();   
 });
}
