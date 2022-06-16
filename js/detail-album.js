let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let kevinId = queryStringObj.get("id");

let nombreAlbum = document.querySelector(".artista2");
let artista = document.querySelector(".artista");
let img = document.querySelector(".fotoalbum")
let genero = document.querySelector(".genero");
let canciones = document.querySelector(".listenalbum");


let url = (`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${kevinId}`);

fetch(url)
  .then(function(response) {
    return response.json()

})
  .then(function(data){
   console.log(data);
    for (let i=0; i<4; i++){
     let info = data.artist[i];
     nombreAlbum += info.title

     }
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})