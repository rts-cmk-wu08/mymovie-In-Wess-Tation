document.addEventListener("DOMContentLoaded", () => {


let nowShowing = document.querySelector(".nowShowing")


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
`
document.body.prepend(myHeader)



//NOW SHOWING + BTN


let nowShowingHeadline = document.createElement("h1")
nowShowingHeadline.innerText = "Now Showing"
nowShowing.append(nowShowingHeadline)

let showMoreBtn = document.createElement("button")
showMoreBtn.classList.add("seeMore")
showMoreBtn.innerText = "Show More"
nowShowing.append(showMoreBtn)


//SECTION 1

let movieSection = document.createElement("section")
movieSection.classList.add("movie__section")

data.results.forEach(result => {
let article = document.createElement("article")
    article.innerHTML = `
    
    <a href="detail.html?movie=${result.id}"><img src="${imgPath + result.backdrop_path}" class="movie__img"></a>
        
    <h3>${result.original_title}</h3>
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
        
        //SECTION 2
        let divContainer = document.createElement("section")
        divContainer.classList.add("divContainer")
        
        data.results.forEach(result => {
            let div2 = document.createElement("div")
            div2.classList.add("div2")
                div2.innerHTML = `
                
            <a href="detail.html?movie=${result.id}"><img src="${imgPathPopular + result.poster_path}" class="movie__img2"></a>
            <div class="movie__info">
                <h3>${result.original_title}</h3>
                <p><i class="fa-solid fa-star"></i> ${result.vote_average}</p>
                <div class="genres">
                <p>${result.genre_ids}</p>
                </div>
            </div>
                
            `
            
            divContainer.append(div2)
            })
        document.body.append(divContainer)


    })










})