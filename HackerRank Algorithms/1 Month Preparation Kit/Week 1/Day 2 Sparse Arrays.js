/*
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the 
list of input strings. Return an array of the results.
*/

function matchingStrings(strings, queries) {
    let results = [];
    
    /*
    .forEach() executes the function in the parentheses on every element in the given array (queries).
    query stands for each element in queries.
    */
    queries.forEach(query => {

        /*
        .filter() creates a new array from all the elements in the given array (strings) that pass the test in the parentheses.
        string stands for each element in strings.
        strings.filter().length is the length of the new array as a number.
        That number is then pushed into results.
        */
        results.push(strings.filter(string => string === query).length);
    })

    /*
    To illustrate the entire process above: 
    strings = ['a', 'a'] and queries = ['a', 'b'].

    1. ['a', 'b'].forEach('a' => {
        ['a', 'a'].filter('a' => 'a' === 'a') = true, so strings.filter = ['a'].
        ['a'].filter('a' => 'a' === 'a') = true, so strings.filter = ['a', 'a'].
        strings.filter.length = 2.
        results.push(2) = [2].
    })

    2. ['b'].forEach('b' => {
        ['a', 'a'].filter('a' => 'a' === 'b') = false, so strings.filter = [].
        ['a'].filter('a' => 'a' === 'b') = false, so strings.filter = [].
        strings.filter.length = 0.
        results.push(0) = [2, 0].
    })

    3. Return [2, 0].
    */
    return results;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));
// [2, 1, 0]