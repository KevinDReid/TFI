let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
queryStringObj.get('id');

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
            function time(duration){
            duration/60
            }

            albumCover.innerHTML = `<img height="640" width="640" src="${dataAlbum.cover_big}" alt="${dataAlbum.title}">`

            let trackInfo = document.querySelector ('.divimportante')
            trackInfo.innerHTML = `<div class="img">
            </div>
            <div class="texto1">
                <h4 class="david"> ${dataArtist.name} / ${dataAlbum.title} </h4>
                <h2 class="cancion"> ${dataSong.title}</h3>
            </div>`

            let fullTrackInfo = document.querySelector ('.divaside')
            fullTrackInfo.innerHTML `<div class="texto">
            <h3 class="span1"> Canción</h3>
            <span> 1. </span><span> ${dataSong.name}</span>
            <span class="tiempo"> ${duration}</span>
            
            <span class="triangulo"> <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/05IbhAKODbXn8og9uaUgpc?utm_source=generator" width="100%" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></span>
            <audio src="https://embed.music.apple.com/ar/album/permanence/1599768590?i=1599768594"></audio>
          
            <h3 class="span1"> Acerca del álbum</h3>
            <div class="div1"> 
              <span class="span1">Artistas: </span><span class="desc"> David Guetta, Morten</span>
            </div>
            <div class="div2">
              <span class="span1"> Fecha de lanzamiento: </span> <span class="desc"> 01-07-2022</span>
            </div>
            <div class="div3">
              <span class="span1"> Genero:  </span><span class="desc"> Electronica</span>
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