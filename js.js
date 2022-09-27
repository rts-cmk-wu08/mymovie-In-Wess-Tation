document.addEventListener("DOMContentLoaded", () => {


let wrapperElm = document.querySelector(".wrapper")

//HEADER

let myHeader = document.createElement("header")
myHeader.innerHTML= `
    <div class="top">
        <h2>MyMovies</h2>
        <label class="switch">
        <input type="checkbox" data-mode="check" id="check">
        <span class="slider round"></span>
        </label>
    </div>
`
wrapperElm.prepend(myHeader)

//MAIN

let myMain = document.createElement("main")
wrapperElm.append(myMain)

//FOOTER
    
        let myFooter = document.createElement("footer")
        myFooter.innerHTML= `
            <div class="tags">
            <i class="fa-brands fa-slack"></i>
            <i class="fa-solid fa-ticket-simple"></i>
            <i class="fa-regular fa-bookmark"></i>
            </div>
        `
        wrapperElm.append(myFooter)



let nowShowing = document.createElement("section")
nowShowing.classList.add("nowShowing")
myMain.append(nowShowing)

let popular = document.createElement("section")
popular.classList.add("popular")
myMain.append(popular)


let imgPath ="https://image.tmdb.org/t/p/original"
let URLPath = "https://api.themoviedb.org/3/"
let APIKey = "8aae96e730d41065f7cfa804530c488a"


fetch(`${URLPath}movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        console.log(data)


//NOW SHOWING + BTN


let nowShowingHeadline = document.createElement("div")
nowShowingHeadline.innerHTML = `
<div class="space__between">
<h1>Now Showing</h1>
<a href="#"><button class="seeMore">See More</button></a>
</div>
`
nowShowing.append(nowShowingHeadline)


//SECTION 1

let movieSection = document.createElement("section")
movieSection.classList.add("movie__section")

data.results.forEach(result => {
let article = document.createElement("article")
    article.innerHTML = `
    
    <a href="detail.html?movie=${result.id}"><img src="${imgPath + result.backdrop_path}" class="movie__img"></a>
        
    <h3 class="movie__title">${result.original_title}</h3>
    <p class="vote"><i class="fa-solid fa-star"></i> ${result.vote_average} IMDb</p>
    
`

movieSection.append(article)
})

nowShowing.append(movieSection)





    })


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8aae96e730d41065f7cfa804530c488a&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let imgPathPopular = "https://image.tmdb.org/t/p/w500"
        

        let popularHeadline = document.createElement("div")
        popularHeadline.innerHTML = `
        <div class="space__between">
        <h1>Popular</h1>
        <a href="#"><button class="seeMore">See More</button></a>
        </div>
        `
        popular.append(popularHeadline)

        //SECTION 2
        let popularContainer = document.createElement("section")
        popularContainer.classList.add("divContainer")
        
        data.results.forEach(result => {
            let popularMovies = document.createElement("div")
            popularMovies.classList.add("div2")
            popularMovies.innerHTML = `
            <a href="detail.html?movie=${result.id}"><img src="${imgPathPopular + result.poster_path}" class="movie__img2"></a>
            <div class="movie__info">
                <h3 class="movie__title">${result.original_title}</h3>
                <p class="vote"><i class="fa-solid fa-star"></i> ${result.vote_average} IMDb</p>
                
                <p class="genres"></p>
                
            </div>
                
            `
            
            popularContainer.append(popularMovies)
           
        popular.append(popularContainer)



//INFINITE MOVIES




// const api = "https://api.themoviedb.org/3/movie/popular?api_key=8aae96e730d41065f7cfa804530c488a&language=en-US&page=1"

// async function getMoreMovies(offset) {
//     const response = await fetch(`${api}?limit=10&offset${offset}`)
//     const data = await response.json()

// data.results.forEach(function(result, index) {
//     const id = result.url.split("/")[6]

// const article = document.createElement("article")
// article.innerHTML = `<h1>hej</h1>`
// main.appendChild(article)

// const pages = math.cell(data.count / 10)
// const currentPage = (offset + 10) / 10

// if (index === 8|| pages === currentPage) {
//     const intersectionObserver = new intersectionObserver(function(entries) {
//         if (entries[0].intersectionRatio <= 0) return
//         intersectionObserver.unobserve(article)
//         getMoreMovies(offset + 10)
//     })

//     intersectionObserver.observe(article)
// }


// })//forEach end
// }
// getMoreMovies(0)








//GENRE

let genreElm = popularMovies.querySelector(".genres")

    result.genre_ids.forEach(id => {
        let currentGenre = genres.find(genre => genre.id == id)

        let genreSpan = document.createElement("span")
        genreSpan.classList.add("genre__pill")
        genreSpan.innerText = currentGenre.name
        genreElm.append(genreSpan)
    })


 })
    })



   






})