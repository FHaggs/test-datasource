// Array of inspirational quotes
const quotes = [
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "In the middle of every difficulty lies opportunity.",
  "The best way to predict the future is to create it.",
  "Don't watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "The only way to do great work is to love what you do.",
  "Your time is limited, don't waste it living someone else's life."
];

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  console.log(randomQuote);
}

// Generate a random quote
generateRandomQuote();
