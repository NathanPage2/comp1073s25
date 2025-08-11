
const personsName = document.querySelector("#personsName");
const nameSearch = document.querySelector("#nameSearch");
const characterName = document.querySelector("#characterName");
const resultsOutput = document.querySelector("#results");
const buttonFun = document.querySelector("#buttonT");
const counter = document.querySelector("#count");
let i = 0; 

nameSearch.addEventListener("click", () => {
    const query = characterName.value.trim();
    personsName.textContent = `hello, how are you doing ${query}!`; 
});

buttonFun.addEventListener("click", function () {
    i++;
    const p = document.createElement("p");
    p.textContent = "Hello World!";
    resultsOutput.appendChild(p);
    counter.textContent = `The current count is ${i}!!!`;
});

