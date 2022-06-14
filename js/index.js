// Artists
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists')
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data);
        for (let i=0; i<5; i++) {
            let artistUl = document.querySelector('.list-artist');
            let pic = data.data[i].picture;
            let name = data.data[i].name;
            artistUl.innerHTML += `<li class="sub-list sub-list-artist"><a href="detail-artist.html" class="sub-list-button"> <div class="content-container"><img src="${pic}" alt="artist"> <div class="list-text"><h3>${name}</h3></div></div></div></a></li>`;
            console.log(data);
            
        }
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})

// Discos
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums')
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data.data[1]);
        for(let i=0; i<5; i++) {
            let albumUl = document.querySelector('.list-albums');
            let pic = data.data[i].cover;
            let name = data.data[i].title;
            albumUl.innerHTML += `<li class="sub-list"><a href="detail-album.html" class="sub-list-button"><div class="content-container"><img src="${pic}" alt="artist"> <div class="list-text"><h3>${name}</h3></div></div></a></li>`
        }
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})

// Tracks
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks')
    .then(function(response) {
        return response.json()
})
.then(function(data){
    console.log(data.data[1]);
    for(let i=0; i<5; i++) {
        let albumUl = document.querySelector('.list-tracks');
        let pic = data.data[i].album.cover;
        let name = data.data[i].title;
        console.log(albumUl);
        albumUl.innerHTML += `<li class="sub-list"><a href="detail-track.html" class="sub-list-button"><div class="content-container"><img src="${pic}" alt="artist"> <div class="list-text"><h3>${name}</h3></div></div></a></li>`
    }
})

    .catch(function(error){
    console.log('Este es el error: ' + error);})
