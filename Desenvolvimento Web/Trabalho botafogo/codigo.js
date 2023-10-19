const tamanho = atletas.length


var element = document.getElementById('info')
element.style.display = 'flex'

for (var i = 0; i < tamanho; i++) {
    var div = document.createElement('div')
    div.id = `atleta ${i}` 
    div.style.background = "gray"
    div.style.color = "white"
    div.style.width = "20rem"
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    div.style.marginRight = '10px'

    var tag = document.createElement('p')
    var text = document.createTextNode(atletas[i].nome)
    tag.style.textAlign = 'center'
    tag.appendChild(text)
    div.appendChild(tag)

    var tag2 = document.createElement('img')
    tag2.src = atletas[i].imagem
    tag2.alt = atletas[i].nome
    div.appendChild(tag2)

    var tag3 = document.createElement('p')
    var text = document.createTextNode(atletas[i].descricao)
    tag3.style.textAlign = 'center'
    tag3.appendChild(text)
    div.appendChild(tag3)

    element.appendChild(div)
}


