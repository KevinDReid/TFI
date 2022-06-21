let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let storageLikedSongs = localStorage.getItem('likedSongs');
let likedSongsArray = JSON.parse(storageLikedSongs)
let likedSongs = [];
let getDate = localStorage.getItem('storageDate')
let dateArray = JSON.parse(getDate)

for (let i=0; i<likedSongsArray.length; i++){
fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${likedSongsArray[i]}`)
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data);

let duration = data.duration
function time (){
    let minutes = Math.floor(duration/60);
    let seconds = duration - minutes * 60 ;
    if (seconds <= 9) {
        seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`
}


if(storageLikedSongs){
    likedSongs = likedSongsArray
}
let playlistSongs = document.querySelector(".plol")
playlistSongs.innerHTML += `<li class="plsongs">
<div class="plsonginfo plsize1">
<h5>${[i+1]}</h5>
<iframe title="deezer-widget"src="https://widget.deezer.com/widget/dark/track/${data.id}"width="100"height="100"
            frameborder="0"allowtransparency="true"allow="encrypted-media;
            clipboard-write"></iframe>
<div class="songartist">
  <h4 class="white weight newsize bot"><a href="detail-track.html?id=${data.id}">${data.title}</a></h4>
  <p class="top"><a class="top" href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a></p>
</div>
</div>
<div class="plsize2">
<p><a href="detail-album.html?id=${data.album.id}">${data.album.title}</a></p>
</div>
<div class="plsize3">
<p>${dateArray[i]}</p>
</div>
<div class="plsize4">
<p class="change"><a href="#" class="heart"><i class="fa-solid fa-heart greenyellow"></i></a> ${time()}</p>
</div></li>`

})
    .catch(function(error){
    console.log('Este es el error: ' + error);})}

// Nombre de la playlist
let playInp = document.querySelector('.playInp');
let playSub = document.querySelector('.playSub');
playSub.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.setItem('playlistName', JSON.stringify(playInp.value));
})
let removed = localStorage.getItem('playlistName').replace(/"+/g, '')
playInp.value = removed;
