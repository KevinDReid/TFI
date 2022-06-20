let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let storageLikedSongs = localStorage.getItem('likedSongs');
let likedSongsArray = JSON.parse(storageLikedSongs)
let likedSongs = [];

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
<img
  class="songsplimg"
  src="${data.album.cover_medium}"
  alt="${data.artist.name}"
/>
<div class="songartist">
  <h4 class="white weight newsize bot"><a href="detail-track.html?id=${data.id}">${data.title}</a></h4>
  <p class="top"><a class="top" href="detail-artist.html?id=${data.id}">${data.artist.name}</a></p>
</div>
</div>
<div class="plsize2">
<p><a href="detail-album.html?id=${data.id}">${data.album.title}</a></p>
</div>
<div class="plsize3">
<p>${data.release_date}</p>
</div>
<div class="plsize4">
<p><a href="#"><i class="fa-solid fa-heart greenyellow"></i></a> ${time()}</p>
</div></li>`

let like = document.querySelector(".fa-heart");
document.querySelector(".fa-heart").addEventListener('click', function(event) {
    event.preventDefault()

    if(likedSongs.includes(data.id)){
        let chaucancion = likedSongs.indexOf(id)
        likedSongs.splice(chaucancion, 1);
        like.innerHTML = `<p><a href="#"><i class="fa-regular fa-heart greenyellow"></i></a> </p>`

    } else {
        likedSongs.push(data.id);
        like.innerHTML = `<p><a href="#"><i class="fa-solid fa-heart greenyellow"></i></a> </p>`

    }     

    let FavoritosToString = JSON.stringify(likedSongs);
    localStorage.setItem('likedSongs', FavoritosToString)


    console.log(localStorage.getItem("likedSongs"));
});
document.querySelector(".plsongs").addEventListener('mouseover', function(event) {
    document.querySelector("h5").innerHTML = `<a class = "play" src="#"><i class="fa-solid fa-play"></i></a>`
    document.querySelector(".play").addEventListener('click', function(event) {
        let sound = new Audio(`https://widget.deezer.com/widget/dark/track/${id}`);
        sound.currentTime = 0;
        sound.play();
    });

});
document.querySelector(".plsongs").addEventListener('mouseout', function(event) {
   
    document.querySelector("h5").innerHTML = `${[i+1]}`

});
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})}
