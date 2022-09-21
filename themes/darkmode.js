document.addEventListener("DOMContentLoaded", () => {


let setActiveStyleSheet = function(title) {
    let css = `link[rel="alternate stylesheet"]`;
    let stylesheets = document.querySelectorAll(css);
    stylesheets.forEach(sheet => sheet.disabled = true);
    let selector = `link[title="${title}"]`
    let activeSheet = document.querySelector(selector);
    activeSheet.disabled = false;
    localStorage.setItem("theme", title);
}
let savedSheet = localStorage.getItem("theme")
console.log(savedSheet)
if(savedSheet) {
    setActiveStyleSheet(savedSheet);
    if (savedSheet === "dark") {
        document.getElementById("check").checked = true;
    }

}else {
    setActiveStyleSheet("light");
}


let darkElm = document.querySelector('[data-mode="check"]');

darkElm.addEventListener("click", (event) => {
    if (event.target.checked) {
        setActiveStyleSheet('dark')
        let inputChecked = document.getElementById("check").checked
        console.log(inputChecked)
    }else {
        setActiveStyleSheet('light')
    }

})


// let lightElm = document.querySelector('[data-mode="check"]');

// lightElm.addEventListener("click", () => {
//     setActiveStyleSheet('light')
// })


// let lightBtnElm = document.querySelector('[data-mode="light"]');
// let darkBtnElm = document.querySelector('[data-mode="dark"]');

// lightBtnElm.addEventListener("click", function () {
//     setActiveStyleSheet('light')
// })
// darkBtnElm.addEventListener("click", function () {
//     setActiveStyleSheet('dark')
// })











})