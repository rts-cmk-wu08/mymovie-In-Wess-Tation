document.addEventListener("DOMContentLoaded", () => {

let wrapperElm = document.querySelector(".wrapper")

let myMain = document.createElement("main")
wrapperElm.append(myMain)

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
   
            
//HEADER
let myHeader = document.createElement("header")
myHeader.innerHTML= `
    <img class="movie__poster" src="${imgPath + data.backdrop_path}" alt="">
`
wrapperElm.prepend(myHeader)



//SECTION INFO AND DESCRIPTION
let movieDetails = document.createElement("section")
movieDetails.innerHTML = `

<div class="info">
    <div class="bookmark">
<h2 class="movie__text">${data.title}</h2>
<i class="fa-regular fa-bookmark"></i>
</div>
<p class="movie__score movie__text grey"><i class="fa-solid fa-star"></i> ${data.vote_average} IMDb</p>
<div class="genres">

</div>

<div class="movie__LL">
<div class="movie__length movie__text">
    <p class="grey">Length</p>
    <p>${data.runtime} Minutes</p>
</div>
<div class="movie__language movie__text">
 <p class="grey">Language</p>
    <p>${data.original_language}</p>
</div>
<div class="movie__rating movie__text">
    <p class="grey">Ratin</p>
    <p>${data.adult}</p>
</div>


</div>
<h3 class="descrip__hedline">Description</h3>
<p class="descrip__text movie__text grey">${data.overview}</p>
</div>
`
myMain.append(movieDetails)


//MOVIE GENRES
let genresElm = document.querySelector(".genres")
data.genres.forEach(genre => {

    let span = document.createElement("span")
    span.classList.add("movie__text")
    span.innerText = genre.name


    genresElm.append(span)
})
  
})





//CAST

fetch(`https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${APIKey}&language=en-US`)
.then(response => response.json())
.then(data => {

let castElm = document.createElement("section")
castElm.classList.add("castElm")

data.cast.forEach(casts => {

    let castList = document.createElement("atricle")
    castList.innerHTML = `
    <h1>Cast</h1>
    <img src="" alt="">
    <p>${casts.name}</p>

`
castElm.append(castList)
})
myMain.append(castElm)

})


})