const quotes = document.querySelector('.quote');
const QuoteButton = document.getElementById('new-quote-btn');
async function RandomQuote() {
  try {
     const response = await fetch('https://type.fit/api/quotes');
     const data = await response.json();
     const randomQuote = data[Math.floor(Math.random() * data.length)];
     quotes.innerHTML = `
       <p>${randomQuote.text}</p>
       <p>- ${randomQuote.author || 'Unknown'}</p> `;
   }
    catch (error) {
     console.error('It catches an error:', error);
    quotes.innerHTML = '<p>Failed to fetch a random quote. Please try again.</p>';
   }
 }

 function ClickNewQuoteButton() {
   RandomQuote();
 }
 QuoteButton.addEventListener('click', ClickNewQuoteButton);

 RandomQuote();

