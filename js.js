document.addEventListener("DOMContentLoaded", () => {

let section = document.querySelector("section")


fetch("https://api.themoviedb.org/3/movie/550?api_key=8aae96e730d41065f7cfa804530c488a")
    .then(response => response.json())
    .then(data => {
        console.log(data)


data.movies.forEach(movie => {

let showing = localStorage.getItem(movie.id)
    let section = document.createElement("section")
    section.classList.add("nowShowing")
    section.innerHtml = `
        <h1>MyMovies</h1>
        <h2>Now showing</h2>


    `


section.append(section)
})

















    })











})