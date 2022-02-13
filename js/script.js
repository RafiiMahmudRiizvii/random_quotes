//todo : project 1 - Random Quote Generator

//*--------------------------------------------------------SELECTORS--------------------------------------------------------*//
const body = document.querySelector("body");
const loadQuote = document.querySelector("#load-quote");
const filterQuote = document.querySelector("#filter-quote");
const quote = document.querySelector(".quote");
const sourceName = document.querySelector(".name"); //i add a span tag  with className "name" in th p tag 
const citation = document.querySelector(".citation");
const year = document.querySelector(".year");


//*--------------------------------------------------------DATA--------------------------------------------------------*//
const Quote1 = {
    quote: "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former. Albert Einstein",
    source: " Albert Einstein",
    citation: "Inc",
    year: "1945",
    tag: "science"

}
const Quote2 = {
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    citation: "Frobes",
    year: "2015",
    tag: "life"

}
const Quote3 = {
    quote: "The world is changed because you are made of ivory and gold. The curves of your lips rewrite history.",
    source: " Oscar Wilde",
    citation: "GoodReads",
    year: "2000",
    tag: "history"

}
const Quote4 = {
    quote: "Science is not only a disciple of reason but, also, one of romance and passion. ",
    source: "Stephen Hawking",
    citation: "Frobes",
    year: "2004",
    tag: "science"
}
const Quote5 = {
    quote: "Science and technology revolutionize our lives, but memory, tradition and myth frame our response. ",
    source: "Arthur M. Schlesinger",
    citation: "Inc",
    year: "2016",
    tag: "science"
}
const Quote6 = {
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.Thomas A. Edison",
    source: " Thomas A. Edison",
    citation: "Inc",
    year: "1670",
    tag: "life"
}
const Quote7 = {
    quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking",
    source: "Steve Jobs",
    citation: "Parade",
    year: "2003",
    tag: "life"
}
const Quote8 = {
    quote: "Every moment happens twice: inside and outside, and they are two different histories.",
    source: "Zadie Smith, White Teeth",
    citation: "Inc",
    year: "2020",
    tag: "history"
}
const Quote9 = {
    quote: "Research is what I'm doing when I don't know what I'm doing.",
    source: " Wernher von Braun",
    citation: "Frobes",
    year: "1999",
    tag: "science"
}
const Quote10 = {
    quote: "The universe is made of stories, not of atoms.",
    source: "Muriel Rukeyser",
    citation: "Parade",
    year: "2022",
    tag: "science"
}
const Quote11 = {
    quote: "The most effective way to destroy people is to deny and obliterate their own understanding of their history.",
    source: "George Orwell",
    citation: "Inc",
    year: "1997",
    tag: "history"
}
const Quote12 = {
    quote: "I can only note that the past is beautiful because one never realises an emotion at the time. It expands later, and thus we don't have complete emotions about the present, only about the past.",
    source: "Virginia Woolf",
    citation: "GoodReads",
    year: "1955",
    tag: "history"
}
const Quote13 = {
    quote: "My mother thinks I am the best. And I was raised to always believe what my mother tells me",
    source: "Diego Maradona",
    citation: "Frobes",
    year: "1970",
    tag: "life"
}
const Quote14 = {
    quote: "Success isn't determined by how many times you win, but by how you play the week after you lose.",
    source: "Pele",
    citation: "Inc.",
    year: "1960",
    tag: "life"
}
const Quote15 = {
    quote: "Life has a much bigger plan for you. Happiness is part of that plan. Health is part of that plan. Stability is part of that plan. Constant struggle is not.",
    source: "Kris Carr",
    citation: "Frobes",
    year: "2000",
    tag: "life"
}
const quotes = [Quote1, Quote2, Quote3, Quote4, Quote5, Quote6, Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15]
const colors = ["brown", "blueviolet", "coral", "cornflowerblue", "crimson", "darkgreen", "deeppink", "indigo", "lightseagreen", "orangered", "peru"]

var intLi 
var intSci 
var intHis 
var intAll 
var life 
var sci
var his
var autoNew

//*--------------------------------------------------------FUNCTIONS--------------------------------------------------------*//
//! getRandomQuote  function
function getRandomQuote(quoteArry) {
    const recvQuoteArry = quoteArry;
    const len = recvQuoteArry.length - 1;
    let randomNumber = Math.floor(Math.random() * len);
    // //console.log(randomNumber);
    return recvQuoteArry[randomNumber];
}

//! getRandomColor function
function getRandomColor() {
    let randomNumber = Math.floor(Math.random() * 11);
    // //console.log(randomNumber);
    return colors[randomNumber];
}


//! printQuote function
function printQuote(quoteArry = quotes) {
    const foundQuote = getRandomQuote(quoteArry);
    const foundColor = getRandomColor();
    // //console.log(foundQuote);
    // //console.log(foundColor);
   
        quote.textContent = foundQuote.quote;
        sourceName.textContent = foundQuote.source;
        citation.textContent = foundQuote.citation;
        year.textContent = foundQuote.year;
        body.style.backgroundColor = foundColor;
        console.log(foundQuote.tag);
    
   
    
   
}


//! filter function
function filterOption(e) {
    
     clearInterval(auto)
     
    
    // //Stop all setInterval
    if(intLi || intHis || intSci || intAll){
        clearInterval(intLi)
        clearInterval(intHis)
        clearInterval(intSci)
        clearInterval(intAll)

    }

    let filterValue = e.target.value;
    switch (filterValue) {
        case "life":
            loadQuote.classList.add("life")
            loadQuote.classList.remove("all")
            loadQuote.classList.remove("science")
            loadQuote.classList.remove("history")
            
            life = filterArry(quotes,filterValue);
            intLi = setInterval(function(){printQuote(life)}, 15000);
          
            
            break;

            

        case "science":
           
            loadQuote.classList.add("science")
            loadQuote.classList.remove("all")
            loadQuote.classList.remove("life")
            loadQuote.classList.remove("history")
            sci = filterArry(quotes,filterValue);
            intSci = setInterval(function(){printQuote(sci)}, 15000);

            break;

        case "history":
            loadQuote.classList.add("history")
            loadQuote.classList.remove("all")
            loadQuote.classList.remove("science")
            loadQuote.classList.remove("life")
            his =  filterArry(quotes,filterValue);
            intHis = setInterval(function(){printQuote(his)}, 15000);

            break;
        case "all":
            loadQuote.classList.add("all")
            loadQuote.classList.remove("history")
            loadQuote.classList.remove("science")
            loadQuote.classList.remove("life")
            
            intAll = setInterval(function(){printQuote(quotes)}, 15000);

            break;
    }

}
//!  Filter Quote Array
function filterArry(arry,option) {
            const filterArryQuotes = arry.filter((ary)=>{
                return ary.tag == option
            })
            return filterArryQuotes;
}




//*--------------------------------------------------------EVENT LISTENERS--------------------------------------------------------*//
/***
 * click event listener for the print quote button
 ***/
loadQuote.addEventListener("click", (e) => {
    const targetOption = e.target


    
       if (targetOption.classList.contains("life")) {
        //    console.log("Life");
          printQuote(life)
        } else if(targetOption.classList.contains("science")){
        //    console.log("Science");
          printQuote(sci)

           
        }else if(targetOption.classList.contains("history")){
        // console.log("History");
        printQuote(his)
        
        } else{
            
            printQuote()
            
            
         }

        


        // setInterval("printQuote()", 10000);
})
    filterQuote.addEventListener("click", filterOption)
   var auto = setInterval("printQuote()", 15000);


        

    