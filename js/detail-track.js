let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`)
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data);
        for(let i=0; i<1; i++){
            let albumCover = document.querySelector('.permanence')
            let dataAlbum = data.data[i].album
            let dataArtist = data.data[i].artist
            let dataSong = data.data[i]

            let duration = dataSong.duration
            function time (){
                let minutes = Math.floor(duration/60);
                let seconds = duration - minutes * 60 ;
                if (seconds <= 9) {
                    seconds = `0${seconds}`
                }

                return `${minutes}:${seconds}`
            }


            albumCover.innerHTML = `<img height="640" width="640" src="${dataAlbum.cover_big}" alt="${dataAlbum.title}">`

            let trackInfo = document.querySelector ('.divimportante')
            trackInfo.innerHTML = `<div class="img">
            </div>
            <div class="texto1">
                <h4 class="david"> ${dataArtist.name} / ${dataAlbum.title} </h4>
                <h2 class="cancion"> ${dataSong.title}</h3>
            </div>`

            let artistName = document.querySelector ('.img')
            artistName.innerHTML = `<h1>${dataArtist.name}</h1>`

            let fullTrackInfo = document.querySelector ('.divaside')
            fullTrackInfo.innerHTML = `<div class="texto">
            <h3 class="span1"> Canción</h3>
            <span> ${dataSong.position}. </span><span> ${dataSong.title}</span>
            <span class="tiempo"> ${time()}</span>
            
            <span class="triangulo"> <iframe style="border-radius:12px" src="${dataSong.preview}" width="100%" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></span>
            <audio src="${dataAlbum.cover_medium}"></audio>
          
            <h3 class="span1"> Acerca del álbum</h3>
            <div class="div1"> 
              <span class="span1">Artistas: </span><span class="desc"> ${dataArtist.name}</span>
            </div>
            <div class="div2">
                        <span class="span1"> Fecha de lanzamiento: </span> <span class="desc"> ${dataAlbum.release_date}</span>
                      </div>
                      <div class="div3">
                        <span class="span1"> Genero:  </span><span class="desc"> Electronica</span>
                      </div>
            <div class="div4">
              <span class="span2"> <a href="playlist.html" class="arc" >Añadir a mi playlist</a> </span>
            </div>
            <div class="div5">
              <span class="span2"> <a href="playlist.html" class="arc" >Ver mi playlist</a> </span>
            </div>
          </div>`
        }
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})