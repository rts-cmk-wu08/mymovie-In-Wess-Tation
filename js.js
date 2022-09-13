document.addEventListener("DOMContentLoaded", () => {

let boks = document.querySelector(".boks")
console.log(boks)

let imgPath ="https://image.tmdb.org/t/p/original"
let APIKey = "8aae96e730d41065f7cfa804530c488a"
let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)


let myHeader = document.createElement("header")
myHeader.innerHTML= `
    <div class="top">
        <h2>MyMovies</h2>
        <button class="LDBtn">btn</button>
    </div>
    <div class="bottom">
        <h1>Now showing</h1>
        <button class="seeMore">See more</button>
    </div>
`
boks.append(myHeader)


data.results.forEach(result => {

let nowShowing = localStorage.getItem(result.id)
    let section = document.createElement("section")
    section.classList.add("nowShowing")
    section.innerHTML = `
    <div class="movie__section">
        <img class="movie__img" src="${imgPath + result.backdrop_path}">
        <p>${result.original_title}</p>
        <p class="movie__rating">${result.vote_average}</p>
    </div>

    `


boks.append(section)
})

















    })











})