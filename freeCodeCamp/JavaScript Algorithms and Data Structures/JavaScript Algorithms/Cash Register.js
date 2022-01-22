/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the 
second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value 
of the change key.
*/

function checkCashRegister(price, cash, cid) {

    // Object to hold the money names in cid as a key, and its associated numerical value as its value.
    const moneyNum = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    // cidSum is the sum of all the cash in cid.
    let cidSum = 0;
    for(let moneyName of cid) {
        cidSum += moneyName[1];
    }

    // Rounds cidSum to 2 decimal places to fix the floating point precision issues.
    cidSum = cidSum.toFixed(2);

    // change is what we are trying to reach with the money in cid. Notice how this change is different from the change keys in cid.
    let change = cash - price;

    // changeArr is going to hold the specific change for each money amount if we have sufficient funds.
    let changeArr = [];

    // If change is greater than all the cash in cid, we return insufficient funds.
    if(change > cidSum) return {status: "INSUFFICIENT_FUNDS", change: []};

    // If change (rounded for floating point precision issues) is equal to all the cash in cid, we return the cash register is closed.
    else if(change.toFixed(2) === cidSum) return {status: "CLOSED", change: cid};

    // If change is less than all the cash in cid...
    else {

        // Reverses the order of cid to order money amount by highest to lowest (i.e. 'ONE HUNDRED' - 'PENNY').
        cid = cid.reverse();
        
        // subArr is each sub-array in cid (e.g. ['TWENTY', 60]).
        for(let subArr of cid) {

            // temp sets the second value in each sub-array to 0 (e.g. ['TWENTY', 0]).
            let temp = [subArr[0], 0];
            
            /*
            While change is greater than or equal to a specific money amount and there is enough cash for that money amount (i.e. 
            moneyNum[subArr[0]] is any of the numbers from the moneyNum object)...
            */
            while(change >= moneyNum[subArr[0]] && subArr[1] > 0) {

                // Adds to its respective temp variable.
                temp[1] += moneyNum[subArr[0]];

                // Subtracts from its respective subArr variable in cid.
                subArr[1] -= moneyNum[subArr[0]];

                // Subtracts from the change.
                change -= moneyNum[subArr[0]];

                // Fixes floating point precision issues.
                change = change.toFixed(2);
            }

            // Pushes all the temp values that have a respctive amount greater than 0 into the changeArr for our final answer.
            if(temp[1] > 0) changeArr.push(temp);
        }
    }

    // Removes the edge case where all the cash in cid is greater than the change, but exact change could not be made.
    if(change > 0) return {status: "INSUFFICIENT_FUNDS", change: []};

    // Returns sufficient funds.
    return {status: "OPEN", change: changeArr};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
            ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
            ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], 
            ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
            ["TWENTY", 0], ["ONE HUNDRED", 0]]));
/*
{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], 
["ONE HUNDRED", 0]]}
*/