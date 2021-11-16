/*
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to 
spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, 
following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will 
split up a series of letters into two words (eg. "elephant" and "ride").

The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant 
ride" => "e6t r2e").
*/

// Refer to the README.md for explanation on functions.
function abbreviate(string) {

    // Replaces the regex with the word function, and the plus sign (+) is used to get the number between the first and last letters.
    return string.replace(/[a-z]+/gi, word => {
        const length = word.length;

        // Removes the edge cases involving empty strings.
        return length < 0 ? word: word[0] + (length - 2) + word[length - 1];
    })
}

console.log(abbreviate("internationalization")); 
// "i18n"

console.log(abbreviate("accessibility")); 
// "a11y"

console.log(abbreviate("Accessibility")); 
// "A11y"

console.log(abbreviate("elephant-ride")); 
// "e6t-r2e"