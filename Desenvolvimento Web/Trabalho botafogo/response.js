const key = 'AIzaSyCCMOIQ531QdncjyHtAgNecv7zhF6ARKoA'
const cep = '22790-704'

const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${cep}`

const promise = fetch(url)

promise.then(response => response.json()).then(location => {
    console.log(location)
})

