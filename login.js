function fazerLogin(){
    var nome =  document.getElementById('nome').value
    var senha =  document.getElementById('senha').value

    fetch(`http://localhost:3000/pessoas`)
    .then(Response => Response.json())
    .then(dados => {
        var cadastro = dados.find(pessoa => pessoa.nome = nome && pessoa.senha == senha)

        if(cadastro) {
            window.location.href = "bem-vindo.html"
        }else {
            alert('Nome ou Senha incorreta!!! Tente novamente!')

        }
    })

}