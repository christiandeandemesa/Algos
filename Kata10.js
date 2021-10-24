/* Your task is to write a function which returns the sum of following series upto nth term(parameter).
0 --> 0 --> "0.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */


function SeriesSum(n){
    let str = "";
    let num = 0;
    if(n === 0){
        return str += num.toFixed(2);
    }
    for(let i = 0; i < n; i++){
        let count = 1 + (3 * i);
        let series = 1/count;
        num += series;
    }
    str += num.toFixed(2);
    return str;
}

console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));