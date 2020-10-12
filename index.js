function submitData(name, email) {
    let destinationUrl = "http://localhost:3000/users"

    let formData = {
        name: name,
        email: email
    }

    let configurationObject = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch(destinationUrl, configurationObject)
    .then(function(response) {
        return response.json();
    })
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
}

