let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let kevinId = queryStringObj.get("id");

let nombreAlbum = document.querySelector(".artista2");
let artista = document.querySelector(".artista");
let img = document.querySelector(".fotoalbum")
let genero = document.querySelector(".genero");
let canciones = document.querySelector(".canciones");
let fecha = document.querySelector(".fecha");

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${kevinId}`)
  .then(function(response) {
    return response.json()

})
  .then(function(data){
    console.log(data);
    artista.href = `detail-artist.html?id=${data.artist.id}`
    artista.innerHTML = `<h1 class="artista"> ${data.artist.name}</h1> `   
    nombreAlbum.href = `detail-album.html?id=${data.id}`
    nombreAlbum.innerHTML = `<h2 class="albumName">${data.title}</h2>`  
    img.src = data.cover_big
    genero.innerText = data.genres.data[0].name
    fecha.innerText = data.release_date
    for (i=0; i<data.tracks.data.length; i++){
      canciones.innerHTML += `<a href="detail-track.html?id=${data.tracks.data[i].id}" > ${i+1.} ${data.tracks.data[i].title} </a>`
    }
  


})
    .catch(function(error){
    console.log('Este es el error: ' + error);})