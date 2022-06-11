fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums')
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data.data[0]);
 for (let i=0; i<4; i++) {
             let info = data.data[i];

        let foto = document.querySelector(".fotoalbum");
        let nombreAlbum = document.querySelector(".artista2");
        let artista = document.querySelector(".artista")

       
        foto.innerHTML += info.data.picture_big
                        


         };
         

       
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})

