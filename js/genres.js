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
let card = document.querySelector('.art-gen');
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre/')
.then(function(response) {
    return response.json()
})
.then(function(data){
    for(let i=1; i<data.data.length; i++) {
        let dat = data.data[i];
        console.log(card);
        card.innerHTML += `<section class="gen-card"><a href="detail-genres.html?id=${dat.id}"><div class="gen-card-container"><h2 class="gen-text">${dat.name}</h2></div></a></section>`
    }
    console.log(data);
})
.catch(function(error){
console.log('Este es el error: ' + error);})
