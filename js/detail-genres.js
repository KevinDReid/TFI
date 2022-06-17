let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let bar = queryStringObj.get('id');
let card = document.querySelector('.art-det-gen');
let mainTitle = document.querySelector('h1');
fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${bar}/artists`)
.then(function(response) {
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i=0; i<data.data.length; i++) {
        let dat = data.data[i];
        card.innerHTML += `<section class="det-gen-card"><a href="detail-artist.html"><div class="det-gen-card-container"><h2>${dat.name}</h2><img src="${dat.picture}" alt="foto de artista" /></div></a></section>`
        
    }
    
})
.catch(function(error){
    console.log('Este es el error: ' + error);})
fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${bar}`)
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data);
        mainTitle.innerText = data.name;
})
    .catch(function(error){
    console.log('Este es el error: ' + error);})