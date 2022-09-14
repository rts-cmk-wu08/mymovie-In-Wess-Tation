document.addEventListener("DOMContentLoaded", () => {

let params = new URLSearchParams(window.location.search)
let movie = params.get("movie")
console.log(movie)

    let boks = document.querySelector(".boks")
    console.log(boks)

let imgPath ="https://image.tmdb.org/t/p/original"
let APIKey = "8aae96e730d41065f7cfa804530c488a"
let url = `https://api.themoviedb.org/3/movie/${movie}?api_key=${APIKey}&language=en-US&page=1`
   
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
    


let movieDetails = document.createElement("section")
movieDetails.innerHTML = `
<img class="movie__poster" src="${imgPath + data.backdrop_path}" alt="">
<h2 class="movie__title">${data.title}</h2>
<p class="movie__score">${data.vote_average}</p>
<div class="genres">

</div>

<div class="movie__LL">
<div class="movie__length">
    <p class="grey">Length</p>
    <p></p>
</div>
<div class="movie__language">
 <p class="grey">Language</p>
    <p>${data.original_language}</p>
</div>
<div class="movie__rating">
    <p class="grey">Ratin</p>
    <p>${data.adult}</p>
</div>


</div>
<h3 class="descrip__hedline">Description</h3>
<p class="descrip__text">${data.overview}</p>
`


boks.append(movieDetails)

let genresElm = document.querySelector(".genres")
data.genres.forEach(genre => {

    let span = document.createElement("span")
    span.innerText = genre.name


    genresElm.append(span)
})
  
})
})