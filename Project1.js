let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    person : "Steve Jobs"
},
{
    quote : "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    person : "Martin Luther King Jr"
},
{
    quote : "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
    person : "Albert Einstein"
},
{
    quote : "Be the change that you wish to see in the world.",
    person : "Mahatma Gandhi"
},
{
    quote : "It does not matter how slowly you go as long as you do not stop.",
    person : "Confucius"
},
{
    quote : "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person : "Winston Churchill"
},
{
    quote : "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    person : "Aristotle"
},
{
    quote : "The only thing worse than being blind is having sight but no vision.",
    person : "Helen Keller"
},
{
    quote : "The secret of getting ahead is getting started.",
    person : "Mark Twain"
},
{
    quote : "All our dreams can come true if we have the courage to pursue them.",
    person : "Walt Disney"
}];

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
});