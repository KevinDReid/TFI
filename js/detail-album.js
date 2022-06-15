let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let kevinId = queryStringObj.get("id");

let img = document.querySelector(".fotoalbum")


let url = (`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${kevinId}`);

fetch(url)
    .then(function(response) {
        return response.json()

})
    .then(function(data){
        console.log(data);
        for (let i=0; i<4; i++){
          let info = data.data[i]
          img.src = info
        }
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})