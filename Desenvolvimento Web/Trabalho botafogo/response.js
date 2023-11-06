const promise = fetch('https://botafogo-atletas.mange.li/all')

promise.then( async (response) => {
        console.log( await response.json()) 
    }
)

