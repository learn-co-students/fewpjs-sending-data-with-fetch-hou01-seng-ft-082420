// Add your code here
function submitData(name, email) {

    let usersURL = "http://localhost:3000/users"

    let formData = {
        name,
        email
    }
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

   return fetch(usersURL, configObj)
   .then(function(response) {
       return response.json();
   })
   .then(function(data){
       document.body.innerHTML = data.id
   })
   .catch(function(error){
       document.body.innerHTML = error.message;
   });
}