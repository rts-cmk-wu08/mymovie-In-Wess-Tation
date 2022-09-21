document.addEventListener("DOMContentLoaded", () => {

let wrapperElm = document.querySelector(".wrapper")

let myMain = document.createElement("main")
wrapperElm.append(myMain)

let params = new URLSearchParams(window.location.search)
let movie = params.get("movie")
console.log(movie)

let myHeader = document.createElement("header")
myHeader.innerHTML= `
        <label class="switch">
        <input type="checkbox" data-mode="check" id="check">
        <span class="slider round"></span>
        </label>
    <a href="index.html"><i class="fa-solid fa-arrow-left"></i></a>
`
wrapperElm.prepend(myHeader)

let imgPath ="https://image.tmdb.org/t/p/original"
let APIKey = "8aae96e730d41065f7cfa804530c488a"
let url = `https://api.themoviedb.org/3/movie/${movie}?api_key=${APIKey}&language=en-US&page=1`
   
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
   
            
//HEADER

let moviePoster = document.createElement("div")
moviePoster.innerHTML = `
<img class="movie__poster" src="${imgPath + data.backdrop_path}" alt="">
`

myHeader.append(moviePoster)



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
    <p>${data.runtime} Min</p>
</div>
<div class="movie__language movie__text">
 <p class="grey">Language</p>
    <p>${data.original_language}</p>
</div>
<div class="movie__year movie__text">
    <p class="grey">Release Date</p>
    <p>${data.release_date}</p>
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
let imgPathCast ="https://image.tmdb.org/t/p/original"

fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${APIKey}&language=en-US`)
.then(response => response.json())
.then(data => {

const actorShort = data.cast.slice(0,4)

let castHeadline = document.createElement("div")
    castHeadline.innerHTML = `
        <div class="space__between">
        <h1>Cast</h1>
        <button class="seeMore">Show More</button>
        </div>
    `
myMain.append(castHeadline)


let castElm = document.createElement("section")
castElm.classList.add("castElm")


console.log(data)
actorShort.forEach(casts => {

    let castList = document.createElement("article")
    castList.innerHTML = `
    <img src="${imgPathCast + casts.profile_path}">
    <p>${casts.name}</p>
    `
castElm.append(castList)
})
myMain.append(castElm)



})


})