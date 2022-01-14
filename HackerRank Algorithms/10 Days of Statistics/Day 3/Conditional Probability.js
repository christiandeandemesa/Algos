// Suppose a family has 2 children, one of which is a boy. What is the probability that both children are boys?

function condProb () {

    /*
    The number of possibilities is 3 because if there are two children, both children can be boys (bb), only the first child is a boy (bg)
    or only the second child is a boy (gb).
    */
    const possibilities = ['bb', 'bg', 'gb']
    let favOutcomes = 0;
    let totalOutcomes = 0;
    for(let i = 0; i < possibilities.length; i++) {
        if(possibilities[i].includes('bb')) favOutcomes += 1;
        totalOutcomes += 1;
    }
    return `${favOutcomes} / ${totalOutcomes}`;
}

console.log(condProb());