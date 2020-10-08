function submitData(name, email){
    
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })

    .then(res => res.json())
    // args => {code block} --if only one return value, return is implied
    // same as:
    // function(res){
        //return res.json()
        //}
    
    .then(function (object){
        document.body.innerHTML = object['id']
    })

    .catch(function(error){
        document.body.innerHTML = error.message
    })
        
}