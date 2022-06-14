//let queryString = location.search;
//let queryStringObj = new URLSearchParams(queryString);
//queryStringObj.get("id");

   let nombreAlbum = document.querySelector(".artista2");
    let artista = document.querySelector(".artista");
    let img = document.querySelector(".fotoalbum")


let url = ("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums")
  fetch(url)
      .then(function(response) {
          return response.json()

  })
      .then(function(data){
          console.log(data);
          for (let i=0; i<4; i++){
             let info = data.data[i].artist.cover_big;     
           img.innerHTML += `<img class="fotoalbum" src=${info}  alt="foto album"/>`
      
           }
    

  })
      .catch(function(error){
      console.log('Este es el error: ' + error);})


      
      // 
      
     // let nombreAlbum = document.querySelector(".artista2");
     
     // let genero = document.querySelector(".genero");
     // let canciones = document.querySelector(".listenalbum");
     
     
      //nombreAlbum.innerText = info.artist.name
      //artista.innerText = info.artist.
     