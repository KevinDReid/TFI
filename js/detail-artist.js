let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let kevinId = queryStringObj.get("id");
 
let imgArtistDiv = document.querySelector(".artistdiv")
let nombreArtista= document.querySelector(".artista")
let lista = document.querySelector(".ollista")

let busq = document.querySelector('.busq');
let submit = document.querySelector('.bSub')
// Buscador
submit.addEventListener('click', function(e){
    if (busq.value == '') {
        e.preventDefault();

        alert('No buscó nada.')
    }
    else if (busq.value.length < 3){
        e.preventDefault();

        alert('Introduzca 3 caracteres o más')
    }
})


//Nombre y foto del artista
fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${kevinId}`)
    .then(function(response) {
        return response.json()
})
    .then(function(data){
      console.log(data);
      nombreArtista.innerHTML = `<a href="detail-artist.html?id=${data.id}">${data.name}</a>`
      imgArtistDiv.innerHTML += `<img class="imgg" height="500px" src="${data.picture_big}" alt="foto del artista" />`
      

})
    .catch(function(error){
    console.log('Este es el error: ' + error);})

// Albums

    fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${kevinId}/albums`)
            .then(function(response) {
                return response.json()
})
            .then(function(data){
                console.log(data);
                for (let i=0; i<5; i++)
                lista.innerHTML += `<li>
                 <p>
                  <a
                    href="./detail-album.html?id=${data.data[i].id}"
                    target="_blank"
                  >
                    ${data.data[i].title}</a
                  >
                </p>
              </li>`

})
            .catch(function(error){
            console.log('Este es el error: ' + error);})


