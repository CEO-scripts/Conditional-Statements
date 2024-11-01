let wordCount = 9;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}//This will log the first code block because the value of wordCount is a truthy value


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}/*This will log the else condition code block because the value of 
favoritePhrase is falsy or has a false value*/