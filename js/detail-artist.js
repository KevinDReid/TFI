let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let kevinId = queryStringObj.get("id");
 


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${kevinId}`)//info de artista solo para nombre y foto
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data);


        //otro fetch
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${kevinId}/albums`)
            .then(function(response) {
                return response.json()
        })
            .then(function(data){
                console.log(data);

                for
        })
            .catch(function(error){
            console.log('Este es el error: ' + error);})

})
    .catch(function(error){
    console.log('Este es el error: ' + error);})

