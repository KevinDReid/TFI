



let likedSongs = [];
let storageLikedSongs = localStorage.getItem('likedSongs')
if(storageLikedSongs){
    let likedSongsArray = JSON.parse(storageLikedSongs)
    likedSongs = likedSongsArray
}
let like = document.querySelector(".plsize4");
if(favoritos.includes(idAlgo)){
    like.innerHTML = `<p><a href="#"><i class="fa-solid fa-heart greenyellow"></i></a> ${nose}</p>`
}
like.addEventListener('click', function(event) {
    event.preventDefault()

    if(likedSongs.includes(idSong)){
        let gifASacar = likedSongs.indexOf(idSong)
        likedSongs.splice(gifASacar, 1);
        like.innerHTML = `<p><a href="#"><i class="fa-regular fa-heart greenyellow"></i></a> ${nose}</p>`

    } else {
        favoritos.push(idGif);
        like.innerHTML = `<p><a href="#"><i class="fa-solid fa-heart greenyellow"></i></a> ${nose}</p>`

    }

    let gifFavoritosToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', gifFavoritosToString)


    console.log(localStorage.getItem("favoritos"));
});