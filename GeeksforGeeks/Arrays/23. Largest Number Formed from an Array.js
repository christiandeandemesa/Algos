/*
Given a list of non negative integers, arrange them in such a manner that they form the largest number possible. The result is going to be very large, hence return the 
result in the form of a string.
*/

function printLargest(arr) {
    
    /*
    [...arr] uses the spread operator to create a copy of arr so we don't mutate the original arr.

    .map(String) maps over every element in [...arr] and converts the element into a string (e.g. 30 becomes '30').

    .sort((a, b) => (b + a) - (a + b)) takes pairs of adjoining elements and sorts them (e.g. In the first sorting for [...arr] is [3, 30, 34, 5, 9], a = '30' and 
    b = '3'. Then b + a = '330' and a + b = '303', so 330 - 303 = 27. The result is positive so '3' and '30' do not switch positions. In the second sorting, a = '34' and 
    b = '30'. Then b + a = '3034' and a + b = '3430', so 3034 - 3430 = -396. The result is negative so '30' and '34' switch positions. [...arr] now looks like 
    [3, 34, 30, 5, 9]).

    .join('') takes all the elements in [...arr] and joins them into a string.
    */
    return [...arr].map(String).sort((a, b) => (b + a) - (a + b)).join('');
}

console.log(printLargest([3, 30, 34, 5, 9]));
// '9534330'