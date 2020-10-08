function makeHeader(text){
    let body = document.querySelector(".body")
    let header = document.createElement('h1')
    header.textContent = text
    body.append(header)
}

function submitData(n, e){

    let configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: n,
          email: e
        })
      };

    return fetch('http://localhost:3000/users', configurationObject)
      .then(res=>res.json())
      .then(function(object){
        makeHeader(object.id)
      })
      .catch(function(error){
        makeHeader(error.message)
      })
}


submitData("Billy", "email@gmail.com")