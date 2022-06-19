let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let kevinId = queryStringObj.get("id");
 
let img = document.querySelector(".imgg")
let nombreArtista= document.querySelector(".artista")
let lista = document.querySelector(".ollista")




fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${kevinId}`)//info de artista solo para nombre y foto
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data);
     nombreArtista.innerHTML = `<h1>${data.name}</h1>`
     img.src = data.picture_big

})
    .catch(function(error){
    console.log('Este es el error: ' + error);})

        //otro fetch
 fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${kevinId}/albums`)
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


