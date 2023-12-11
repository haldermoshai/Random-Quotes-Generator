const container = document.querySelector(".container");
let button = document.querySelector(".btn");
let quoteData = document.querySelector(".quote");
let authorData = document.querySelector(".author");
const qtext = document.querySelector(".qtext");
const quotes = [{
    quote : `"The purpose of our lives is to be happy."`,
    author : `— Dalai Lama`
}, {
    quote : `"Life is what happens when you are busy making other plans."`,
    author : `— John Lennon`
}, {
    quote : `"Get busy living or get busy dying."`,
    author : `— Stephen King`
}, {
    quote : ` "You only live once, but if you do it right, once is enough."`,
    author : `— Mae West`
}, {
    quote : `"Many of life’s failures are people who did not realize how close they were to success when they gave up."`,
    author : `— Thomas A. Edison`
}, {
    quote : `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    author : `— Albert Einstein`
}, {
    quote : `"Never let the fear of striking out keep you from playing the game."`,
    author : `— Babe Ruth`
}, {
    quote : `"Money and success don’t change people; they merely amplify what is already there."`,
    author : `— Will Smith`
}, {
    quote : `"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."`,
    author : `— Steve Jobs`
}, {
    quote : `"Not how long, but how well you have lived is the main thing.”`,
    author : `— Seneca`
}, {
    quote : `“If life were predictable it would cease to be life, and be without flavor.”`,
    author : `— Eleanor Roosevelt`
}, {
    quote : `“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”`,
    author : `— Henry Ford`
}, {
    quote : `“In order to write about life first you must live it.”`,
    author : `— Ernest Hemingway`
}, {
    quote : `“The big lesson in life, baby, is never be scared of anyone or anything.”`,
    author : `— Frank Sinatra`
}, {
    quote : `“Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.”`,
    author : `— Unknown`
}, {
    quote : `“Curiosity about life in all of its aspects, I think, is still the secret of great creative people"`,
    author : `— Leo Burnett`
}, {
    quote : `“Life is not a problem to be solved, but a reality to be experienced.”`,
    author : `— Soren Kierkegaard`
}, {
    quote : `"The unexamined life is not worth living."`,
    author : `— Socrates`
}, {
    quote : `"In three words I can sum up everything I've learned about life: It goes on."`,
    author : `— Robert Frost`
}, {
    quote : `"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this."`,
    author : `— Celine Dion`
},
];

button.addEventListener("click", (e) => {
    let time = setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * quotes.length);
        quoteData.innerHTML = quotes[randomNumber].quote;
        authorData.innerHTML = quotes[randomNumber].author;
    }, 500);
});