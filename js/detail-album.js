
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"
  fetch(url)
      .then(function(response) {
          return response.json()

  })
      .then(function(data){
          console.log(data);
          let info = data.data[0];   
         let nombreAlbum = document.querySelector(".artista2");
         let artista = document.querySelector(".artista");
      
        nombreAlbum.innerText = info.artist.name
       artista.innerText = info.artist
  })
      .catch(function(error){
      console.log('Este es el error: ' + error);})


      
      // 
      
     // let nombreAlbum = document.querySelector(".artista2");
     
     // let genero = document.querySelector(".genero");
     // let canciones = document.querySelector(".listenalbum");
     
     
     