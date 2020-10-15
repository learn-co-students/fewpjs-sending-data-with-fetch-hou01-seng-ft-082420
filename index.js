// Add your code here

function submitData(name, email) {

    let data = {
        name,
        email
    }

    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    return fetch( 'http://localhost:3000/users', options)
    .then(response => response.json())
    .then(object => document.body.innerHTML = object[ "id" ])
    .catch( error => document.body.innerHTML = error.message)
}