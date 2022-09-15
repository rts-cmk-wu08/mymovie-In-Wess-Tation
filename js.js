document.addEventListener("DOMContentLoaded", () => {

let wrapperElm = document.querySelector(".wrapper")

//HEADER

let myHeader = document.createElement("header")
myHeader.innerHTML= `
    <div class="top">
        <h2>MyMovies</h2>
        
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
            <i class="fa-regular fa-ticket-simple"></i>
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
<button class="seeMore">Show More</button>
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
    <p><i class="fa-solid fa-star"></i> ${result.vote_average}</p>
    
`

movieSection.append(article)
})

nowShowing.append(movieSection)





    })


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8aae96e730d41065f7cfa804530c488a&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {

        let imgPathPopular = "https://image.tmdb.org/t/p/w500"
        

        let popularHeadline = document.createElement("div")
        popularHeadline.innerHTML = `
        <div class="space__between">
        <h1>Popular</h1>
        <button class="seeMore">Show More</button>
        </div>
        `
        popular.append(popularHeadline)

        //SECTION 2
        let popularContainer = document.createElement("section")
        popularContainer.classList.add("divContainer")
        
        data.results.forEach(result => {
            let div2 = document.createElement("div")
            div2.classList.add("div2")
                div2.innerHTML = `
                
            <a href="detail.html?movie=${result.id}"><img src="${imgPathPopular + result.poster_path}" class="movie__img2"></a>
            <div class="movie__info">
                <h3 class="movie__title">${result.original_title}</h3>
                <p><i class="fa-solid fa-star"></i> ${result.vote_average}</p>
                <div class="genres">
                <p>${result.genre_ids}</p>
                </div>
            </div>
                
            `
            
            popularContainer.append(div2)
            })
        popular.append(popularContainer)



    })



   






})