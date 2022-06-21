let queryString=location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
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

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`)
    .then(function(response){
        return response.json()
})
    .then(function(data){
        console.log(data);
            let albumCover = document.querySelector('.permanence')
            let dataAlbum=data.album
            let dataArtist=data.artist
            let dataSong=data

            let duration = dataSong.duration
            function time(){
                let minutes=Math.floor(duration/60);
                let seconds=duration-minutes*60;
                if(seconds<=9){
                    seconds=`0${seconds}`
                }

                return `${minutes}:${seconds}`
            }


            albumCover.innerHTML = `<img height="640" width="640" src="${dataAlbum.cover_xl}" alt="${dataAlbum.title}">`

            let trackInfo = document.querySelector ('.divimportante')
            trackInfo.innerHTML = `<div class="arreglo-css">
            </div>`

            let artistName=document.querySelector('.arreglo-css');
            artistName.innerHTML = `<h1 class="artista">${dataArtist.name}</h1>`;

            let fullTrackInfo=document.querySelector('.divaside');

            fullTrackInfo.innerHTML = `<div class="texto">
            <h3 class="span1">Canción</h3>
            <span>${dataSong.track_position}.</span><span>${dataSong.title}</span>
            <span class="tiempo">${time()}</span>

            <span class="triangulo"><iframe title="deezer-widget"src="https://widget.deezer.com/widget/dark/track/${id}"width="80%"height="300"
            frameborder="0"allowtransparency="true"allow="encrypted-media;
            clipboard-write"></iframe></span>
            <audio src="${dataAlbum.cover_medium}"></audio>

            <h3 class="span1">Acerca del álbum</h3>

            <div class="div1">
              <span class="span1">Artistas:</span><span class="desc">${dataArtist.name}</span>
            </div>
            
            <div class="div2">
              <span class="span1"> Fecha de lanzamiento: </span> <span class="desc"> ${dataAlbum.release_date}</span>
            </div>

            <div class="div4">
              <span class="span2"> <a href="playlist.html" class="arc add" >Añadir a mi playlist</a> </span>
            </div>

            <div class="div5">
              <span class="span2"> <a href="playlist.html" class="arc" >Ver mi playlist</a> </span>
            </div>
          </div>`
          let likedSongs = [];
          let storageDate = [];


          let getDate = localStorage.getItem('storageDate')
          let storageLikedSongs = localStorage.getItem('likedSongs')
          let today = new Date();
          let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

          if(storageLikedSongs){
            let likedSongsArray = JSON.parse(storageLikedSongs)
            likedSongs = likedSongsArray
         } 
         if(getDate){
          let dateArray = JSON.parse(getDate)
          storageDate = dateArray
       } 

          let add = document.querySelector(".add");

          if(likedSongs.includes(id)){
            add.innerText = "Sacar de mi playlist"
          } else {
          }

        add.addEventListener('click', function(event) {
          event.preventDefault();
          console.log(event);

          if(likedSongs.includes(id)){
            let chaucancion = likedSongs.indexOf(id)
            likedSongs.splice(chaucancion, 1);
            storageDate.splice(date, 1)
            add.innerText = "Añadir a mi playlist"
        } else {
          likedSongs.push(id);
          storageDate.push(date);
          add.innerText = "Sacar de playlist"
    }
    let dateToString = JSON.stringify(storageDate);
    localStorage.setItem('storageDate', dateToString)

    let FavoritosToString = JSON.stringify(likedSongs);
    localStorage.setItem('likedSongs', FavoritosToString)


        }
      )
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})