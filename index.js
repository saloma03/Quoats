var quotes = [
    {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        "author": "Nelson Mandela"
    },
    {
        "text": "The way to get started is to quit talking and begin doing.", 
        "author": "Walt Disney"
    },
    {
        "text": "Your time is limited, don't waste it living someone else's life.", 
        "author": "Steve Jobs"
    },
    {
        "text": "If life were predictable it would cease to be life, and be without flavor.", 
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "If you look at what you have in life, you'll always have more.", 
        "author": "Oprah Winfrey"
    },
]

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// can multiplicate Math.random() * quotes.length 

var previousIndex = -1;

function displayQuoates(){
    do{
        var index = Math.floor(getRandomArbitrary(0, quotes.length));
    }while(index === previousIndex)
    previousIndex = index;
    document.getElementById("quote").innerHTML = quotes[index].text;
    document.getElementById("author").innerHTML = quotes[index].author;
}
