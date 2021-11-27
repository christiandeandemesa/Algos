// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

// Refer to the README.md for explanation on functions.
function domainName(url) {

    // Removes 'https://', 'http://', and 'www.' from url.
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');

    // Removes the first period and everything after it from url.
    return url.split('.')[0];
};

console.log(domainName("http://google.com"));
// "google"

console.log(domainName("http://google.co.jp"));
// "google"

console.log(domainName("www.xakep.ru"));
// "xakep"

console.log(domainName("https://youtube.com"));
// "youtube"

console.log(domainName("123.net"));
// "123"

console.log(domainName("www.codewars"));
// "codewars"