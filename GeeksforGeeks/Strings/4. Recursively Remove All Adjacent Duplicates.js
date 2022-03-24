// Given a string s, remove all its adjacent duplicate characters recursively.

// Gives char a default value because the first time we call this function, we are not giving it a specific char.
function remove(s, char = ' ') {

    // Break case for when the string's less than is less than 2.
    if (s.length < 2) return s;

    // Initializes i here for the below while loop, and i will represent each index in the string.
    let i = 0;

    // While i is less than the string's length...
    while (i < s.length) {

        // If i + 1 (since strings are indexed at 0) is less than the string's length, and the current index's character is equal to the next index's character...
        if (i + 1 < s.length && s[i] === s[i + 1]) {

            // Initializes j here for the below while loop, and j will represent the indices of all adjacent duplicates to i's index's character.
            let j = i;

            // While j + 1 is less than the string's length, and the current index's character is equal to the next index's character, increment j.
            while (j + 1 < s.length && s[j] === s[j + 1]) {
                j++;
            }

            /*
            If i is greater than 0, lastChar is the character at the index before i. 
            Otherwise it's char.
            */
            let lastChar = i > 0 ? s[i - 1] : char;

            /*
            remStr takes a section (substring) of the string from j + 1's index to the last index, then removes the first instance of lastChar using the remove function 
            recursively.
            For example:
            If s = 'geeksforgeek', i = 1, j = 2, and lastChar = 'g', then s.substring(j + 1) = 'ksforgeek'.

            The reason why we call this function recursively is to remove all adjacent strings in each layer.
            For example:
            mississippi will become miiipi after the first run, then mpi after the second run.
            */
            let remStr = remove(s.substring(j + 1), lastChar);

            // s is changed to be a substring of itself from the its first index to i's index.
            s = s.substring(0, i);

            /*
            While remStr's length is greater than 0, the new string's length is greater than 0, and remStr's first character is equal to the new string's last 
            character...
            */
            while (remStr.length > 0 && s.length > 0 && remStr[0] === s[s.length - 1]) {

                /*
                While remStr's length is greater than 0, remStr's first character is not equal to char, and remStr's first character is equal to the new string's last
                character, remStr is a substring of itself from its second index to the last index.
                */
                while (remStr.length > 0 && remStr[0] !== char && remStr[0] === s[s.length - 1]) {
                    remStr = remStr.substring(1);
                }

                // s is changed again to be a substring from the first index to the last index.
                s = s.substring(0, s.length - 1);
            }

            // s is changed again to be itself with remStr concatenated to the end.
            s = s + remStr;

            // i becomes j's index.
            i = j;
        }

        // If i + 1 greater than or equal to the string's length, or the current index's character is not equal to the next index's character, increment i.
        else i++;
    }
    return s;
}

console.log(remove('geeksforgeek'));
// 'gksforgk'
console.log(remove('mississipi'));
// 'mpi'