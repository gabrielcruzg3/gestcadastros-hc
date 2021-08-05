function cadastraProdutos(){
    var nomeProduto = document.getElementById('nomeProduto').value
    localStorage.setItem('nomeProduto', JSON.stringify(nomeProduto))
   
}

function listaProdutos(){
    document.getElementById('produtoList').innerHTML = localStorage.getItem('nomeProduto', nomeProduto)
}

function removeProdutos(){
   localStorage.removeItem('nomeProduto')
   listaProdutos();
}