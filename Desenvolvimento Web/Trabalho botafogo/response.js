const promise = fetch('https://botafogo-atletas.mange.li')

promise.then( (response) => {
        response.text().then( (data) => {console.log(data) } )
    }
)