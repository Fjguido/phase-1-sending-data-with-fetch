// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }), 
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function(error){
//         alert("Bad thigns! Ragnork!");
//         console.log(error.message);
//     })
function submitData (name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"

        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
    })
    .then(function (res){
        return res.json();
    })
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}




