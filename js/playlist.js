let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
fetch('')
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data);

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

let likedSongs = [];

let storageLikedSongs = localStorage.getItem('likedSongs')
if(storageLikedSongs){
    let likedSongsArray = JSON.parse(storageLikedSongs)
    likedSongs = likedSongsArray
}
let like = document.querySelector(".plsize4");
if(likedsongs.includes(id)){
    like.innerHTML = `<p><a href="#"><i class="fa-solid fa-heart greenyellow"></i></a> </p>`
}
document.querySelector(".fa-heart").addEventListener('click', function(event) {
    event.preventDefault()

    if(likedSongs.includes(idSong)){
        let chaucancion = likedSongs.indexOf(idSong)
        likedSongs.splice(chaucancion, 1);
        like.innerHTML = `<p><a href="#"><i class="fa-regular fa-heart greenyellow"></i></a> ${time()}</p>`

    } else {
        likedsongs.push(id);
        like.innerHTML = `<p><a href="#"><i class="fa-solid fa-heart greenyellow"></i></a> ${time()}</p>`

    }

    let FavoritosToString = JSON.stringify(likedSongs);
    localStorage.setItem('likedSongs', FavoritosToString)


    console.log(localStorage.getItem("likedSongs"));
});
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})
