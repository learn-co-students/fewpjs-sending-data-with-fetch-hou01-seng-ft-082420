// Add your code here

function submitData(name, email){
    let formData = {
        name: name,
        email: email
      };

      let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch ("http://localhost:3000/users", configObj)
    .then(function(res) {
        return res.json()
    })
    .then(function(obj){
        console.log(obj)
        idDisplay(obj)
    })
    .catch(function(error){
        alert("Crikey! Unauthorized Access")
        console.log(error.message)
        errorDisp(error)
    })
}

function idDisplay(obj){
    let id = obj.id
    let body = document.querySelector('body')
    let div = document.createElement('div')
    let li = document.createElement ('li')
    li.textContent = id
    div.append(li)
    body.append(div)

}

function errorDisp(error){
    let message = error.message
    let body = document.querySelector('body')
    let div = document.createElement('div')
    let p = document.createElement ('p')
    p.textContent = message
    div.append(p)
    body.append(div)
}
