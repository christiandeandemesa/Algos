/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of 
living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Your function takes in one side of the DNA as the input, 
and outputs the complementary side.
*/

// Refer to the README.md for explanation on functions.
function DNAStrand(dna){
    let compDna = "";

    // Simple switching that's been hardcoded with if statements.
    for(var i = 0; i < dna.length; i++){
        if(dna[i] === "A"){
            compDna += "T";
        }
        else if(dna[i] === "T"){
            compDna += "A";
        }
        else if(dna[i] === "C"){
            compDna += "G";
        }
        else{
            compDna += "C";
        }
    }
    return compDna;
}

console.log(DNAStrand("AAAA"));
// 'TTTT'

console.log(DNAStrand("ATTGC"));
// 'TAACG'

console.log(DNAStrand("GTAT"));
// 'CATA'

console.log(DNAStrand(""));
// ''