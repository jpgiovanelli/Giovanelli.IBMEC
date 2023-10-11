const tamanho = atletas.length

window.onload = () => {

    var element = document.getElementById('nome')

    for (var i = 0; i < tamanho; i++) {
        var tag = document.createElement('p')
        var text = document.createTextNode(atletas[i].nome)
        tag.appendChild(text)
        element.appendChild(tag)

        var tag2 = document.createElement('img')
        tag2.src = atletas[i].imagem
        element.appendChild(tag2)

        var tag3 = document.createElement('p')
        var text = document.createTextNode(atletas[i].descricao)
        tag3.appendChild(text)
        element.appendChild(tag3)
        
    }
}

