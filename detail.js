document.addEventListener("DOMContentLoaded", () => {

let params = new URLSearchParams(window.location.search)
let movie = params.get("movie")
console.log(movie)

    let boks = document.querySelector(".boks")
    console.log(boks)

let imgPath ="https://image.tmdb.org/t/p/original"
let APIKey = "8aae96e730d41065f7cfa804530c488a"
let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`
   
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
    


let movieDetails = document.createElement("section")
movieDetails.innerHTML = `
<h2 class="movie__title">${data.results.original_title}</h2>
<p class="movie__score">${data.results.vote_average}</p>
<p class="movie__genre">${data.results.genre_ids}</p>


<div class="movie__LL">
<div class="movie__length">
    <p class="grey">Length</p>
    <p></p>
</div>
<div class="movie__language">
 <p class="grey">Language</p>
    <p>${data.results.original_language}</p>
</div>
<div class="movie__rating">
    <p class="grey">Ratin</p>
    <p>${data.results.adult}</p>
</div>


</div>
<h3 class="descrip__hedline">Description</h3>
<p class="descrip__text">${data.results.overview}</p>
`


boks.append(movieDetails)
  
})
})