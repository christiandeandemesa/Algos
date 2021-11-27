/* A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed. */

function titleCase(title, minorWords) {
    if(title) {
        const minorArray = minorWords ? minorWords.split(" ").map(word => word.toLowerCase()) : ['']
        let titleArray = title.split(" ")
        let finalTitle = []
        titleArray.map(word => {
            if(minorArray.includes(word.toLowerCase())) {
                finalTitle.push(word.toLowerCase())
            }
            else {
                finalTitle.push(capitalize(word))
            }
        })
        finalTitle[0] = capitalize(finalTitle[0])
        return finalTitle.join(" ")
    }
    else {
        return title
    }
}

function capitalize(word) {
    let newWord = []
    newWord.push(word[0].toUpperCase())
    for (let i = 1; i < word.length; i++) {
        newWord.push(word[i].toLowerCase())
    }
    return newWord.join("")
}


console.log(titleCase('')) // ''
console.log(titleCase('a clash of KINGS', 'a of')) // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')) // 'The Quick Brown Fox'