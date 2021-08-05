function cadastraUser(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var adress = document.getElementById('adress').value;
    

    localStorage.setItem('nome', JSON.stringify(nome))   
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('adress', JSON.stringify(adress))
}

function listaUser(){  
    document.getElementById('nomeList').innerHTML = localStorage.getItem('nome', nome)   
    document.getElementById('emailList').innerHTML = localStorage.getItem('email', email)
    document.getElementById('adressList').innerHTML = localStorage.getItem('adress', adress)
}

function removeUser(){
    localStorage.removeItem('nome')   
    localStorage.removeItem('email')
    localStorage.removeItem('adress')
    listaUser();
}
