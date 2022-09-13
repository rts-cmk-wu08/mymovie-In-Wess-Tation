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




//HEADER

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


//SECTION 1

let movieSection = document.createElement("section")
movieSection.classList.add("movie__section")

data.results.forEach(result => {
let div = document.createElement("div")
    div.innerHTML = `
    
    <a href="detail.html"><img src="${imgPath + result.backdrop_path}" class="movie__img"></a>
        
    <h3>${result.original_title}</h3>
    <p>${result.vote_average}</p>
    
    
`

movieSection.append(div)
})

document.body.append(movieSection)


//SECTION 2
let divContainer = document.createElement("section")
divContainer.classList.add("divContainer")

data.results.forEach(result => {
    let div2 = document.createElement("div")
    div2.classList.add("div2")
        div2.innerHTML = `
        
        <a href="detail.html"><img src="${imgPath + result.backdrop_path}" class="movie__img2"></a>
    <div class="movie__info">
        <h3>${result.original_title}</h3>
        <p>${result.vote_average}</p>
        <p>${result.genre_ids}</p>
        </div>
        
    `
    
    divContainer.append(div2)
    })
document.body.append(divContainer)











    })











})