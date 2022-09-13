document.addEventListener("DOMContentLoaded", () => {

    let boks = document.querySelector(".boks")
    console.log(boks)
    
    fetch("https://api.themoviedb.org/3/movie/550?api_key=8aae96e730d41065f7cfa804530c488a")
        .then(response => response.json())
        .then(data => {
            console.log(data)
    
    
    data.genres.forEach(genre => {
    
    let nowShowing = localStorage.getItem(genre.id)
        let section = document.createElement("section")
        section.classList.add("nowShowing")
        section.innerHTML = `
            <p>${genre.name}</p>
    
    
        `
    
    
    boks.append(section)
    })