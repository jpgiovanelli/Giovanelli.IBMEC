
const seguir = localStorage.getItem('senha')
const div_primaria = document.getElementById('options')

if (seguir == '81dc9bdb52d04dc20036dbd8313ed055'){

    const select_ = document.createElement('select') 

    select_.id = 'menuopt'
    select_.className = 'menu'

    var option_ = document.createElement('option')
    option_.text = 'Todos'
    select_.appendChild(option_)

    var option_ = document.createElement('option')
    option_.text = 'Masculino'
    select_.appendChild(option_)

    var option_ = document.createElement('option')
    option_.text = 'Feminino'
    select_.appendChild(option_)

    div_primaria.appendChild(select_)

    const body = document.body
    body.style.display = 'flex'
    body.style.flexDirection = 'column'
    body.style.alignItems = 'center'

    const handle = (e) => {
        let text_value = String(e.target.value) 
        if (text_value == 'Todos') {
            text_value = 'all'
        }
        else {
            text_value = text_value.toLowerCase()
        }
        console.log(text_value)
        fetch_api(text_value)

    }

    const select = document.getElementById('menuopt')
    select.addEventListener('change', handle)

    const main = (atletas) => {

        const tamanho = atletas.length

        var element = document.getElementById('info')
        element.style.display = 'flex'
        element.style.flexWrap = 'wrap'
        element.style.justifyContent = 'space-between'

        for (var i = 0; i < tamanho; i++) {
            var div = document.createElement('article')
            div.id = `atleta ${i}` 
            div.style.background = "gray"
            div.style.color = "white"
            div.style.width = "20rem"
            div.style.display = 'flex'
            div.style.flexDirection = 'column'
            div.style.margin = '10px'

            div.dataset.id = atletas[i].id
            div.dataset.altura = atletas[i].altura
            div.dataset.nome_completo = atletas[i].nome_completo
            div.dataset.nascimento = atletas[i].nascimento

            div.onclick = click

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

    }

    const click = (e) => {
        const artigo = e.target.closest('article')
        const id = artigo.dataset.id
    
        window.location.href = `/detalhes.html?id=${id}`
    }

    const variar_texto = async () => {
        try {
            const texto_carregado = document.getElementById('texto carregado');
            if (!texto_carregado) {
                console.error("Element with ID 'texto carregado' not found");
                return;
            }

            let contador = 1;

            setInterval(() => {
                let texto = 'Carregando';

                if (contador === 1) {
                    texto_carregado.innerHTML = texto;
                } else if (contador === 2) {
                    texto_carregado.innerHTML = texto + '.';
                } else if (contador === 3) {
                    texto_carregado.innerHTML = texto + '..';
                } else {
                    texto_carregado.innerHTML = texto + '...';
                }


                contador = contador % 4 + 1; // Volta para 1 quando chega a 3
            }, 60); // Atualiza a cada 500 milissegundos (meio segundo)
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const fetch_api = (page) => {

        var element = document.getElementById('info')

        try {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        } catch (error) {
            
        }

        var carregando = document.createElement('div')
        carregando.id = 'Carregando'
        var h1_carregando = document.createElement('h1')
        h1_carregando.id = 'texto carregado'

        carregando.appendChild(h1_carregando)
        select.parentElement.appendChild(carregando)

        variar_texto()

        const promise = fetch(`https://botafogo-atletas.mange.li/${page}`)

        promise.then( async (response) => {
                const atletas =  await response.json()
                main(atletas)
                const wait = document.getElementById('Carregando')
                wait.parentNode.removeChild(wait)
            }
        )
    }



    fetch_api('all')
}

else {
    window.location.href = '/'
}


