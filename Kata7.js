/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Your function takes in one side of the DNA as the input, and outputs the complementary side. */

function DNAStrand(dna){
    var compDna = "";
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

console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))
console.log(DNAStrand(""))