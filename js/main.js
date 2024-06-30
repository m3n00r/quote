var quotes=[
{
    quote:"“Be yourself; everyone else is already taken.”",
    caption:"― Oscar Wilde",
},
{
    quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    caption:"― Marilyn Monroe",
},
 
{quote:"“So many books, so little time.”",
 caption:"― Frank Zappa",
},
{
  quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
caption:"― Albert Einstein",
 },
{
  quote:"“A room without books is like a body without a soul.”",
  caption:"― Marcus Tullius Cicero",
 },
  {
      quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
     caption:"― Bernard M. Baruch",
      },

]

var textQuote=document.getElementById('quote');
var quotecaption=document.getElementById('caption');


function NewQuote(){
var random =Math.floor (Math.random()* quotes.length);
textQuote.innerHTML=quotes[random].quote;
quotecaption.innerHTML=quotes[random].caption;
console.log(random);
} 


