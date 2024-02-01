import quotes from './quotes.js';

const container = document.querySelector(".container");
let button = document.querySelector(".btn");
let quoteData = document.querySelector(".quote");
let authorData = document.querySelector(".author");
const qtext = document.querySelector(".qtext");

let timeoutId;

button.addEventListener("click", (e) => {
    // Clear any existing timeouts
    clearTimeout(timeoutId);

    quoteData.innerHTML = "Loading...";
    authorData.innerHTML = "Loading...";

    // Set a new timeout
    timeoutId = setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * quotes.length);
        quoteData.innerHTML = quotes[randomNumber].quote;
        authorData.innerHTML = quotes[randomNumber].author;
    }, 1000);
});
