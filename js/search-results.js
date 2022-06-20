let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("buscador");

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${busqueda}`)
    .then(function(response) {
        return response.json()
})
    .then(function(data){
        console.log(data);
        let tituloBusqueda = document.querySelector(".srtext")
        

    if(data.data.length==0){
        tituloBusqueda.innerText = `No se a encontrado resultado de busqueda para: ${busqueda}`
    }
    else{
        tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
    }
let srul = document.querySelector(".srul")
for (let i=0;i<data.data.length;i++){
  srul.innerHTML += `<li class="sub-list-sr">
      <a href="detail-track.html?id=${data.data[i].id}" class="sub-list-button-sr">
        <div class="content-container">
          <img
            src="${data.data[i].album.cover_medium}"
            alt="test"
          />
          <div class="list-text"> 
            <h3>${data.data[i].title}</h3>
            <p>${data.data[i].artist.name}</p>
            </div>
            </div>
          </a>
     
    </li>`  
}
})
  .then(function(){
    let gif= document.querySelector(".gif")
    gif.style.display = "none"
    })
    .catch(function(error){
    console.log('Este es el error: ' + error);})