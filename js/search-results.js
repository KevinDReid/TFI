let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("buscador");

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${busqueda}`)
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
let articulos = document.querySelector(".articulos")
console.log(articulos)
    for (let i=0;i<data.data.length;i++){
  articulos.innerHTML += `<article>
  <ul class="srul">
    <li class="sub-list-sr">
      <a href="detail-track.html?id=${data.data[i].id}" class="sub-list-button-sr">
        <div class="content-container">
          <img
            src="${data.data[i].album.cover_medium}"
            alt="test"
          />
          <div class="list-text"> 
            <h3>${data.data[i].title}</h3>
            </a>
            <a href="detail-artist.html?id=${data.data[i].artist.id}" >
            <p>${data.data[i].artist.name}</p>
            </a>
          </div>
        </div>
     
    </li>
  </ul>
</article>`  
}


})
    .catch(function(error){
    console.log('Este es el error: ' + error);})