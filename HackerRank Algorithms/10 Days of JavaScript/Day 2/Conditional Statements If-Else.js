/*
getGrade(score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. It 
must return the letter corresponding to her grade according to the following rules:

If 25 < score <= 30, then grade = A.
If 20 < score <= 25, then grade = B.
If 15 < score <= 20, then grade = C.
If 10 < score <= 15, then grade = D.
If 5 < score <= 10, then grade = E.
If 0 <= score <= 5, then grade = F.

Note that <= means less than or equal to, and >= means greater than or equal to.
*/

function getGrade(score) {
    let grade;

    /*
    The code within an if statement (e.g. grade = 'A') will run if you pass the check (e.g. 25 < score &&...).
    The if statement will run if the score is greater than 25, and (&&) the score is less than or equal to 30.
    The if statement can be written as one line: if (25 < score && score <= 30) grade 'A';
    */
    if (25 < score && score <= 30) {
        grade = 'A';
    }

    // The else if statement will run if you pass the check, and you fail all previous if and else if statements within the same scope.
    else if (20 < score && score <= 25) grade = 'B';
    else if (15 < score && score <= 20) grade = 'C';
    else if (10 < score && score <= 15) grade = 'D';
    else if (5 < score && score <= 10) grade = 'E';

    /*
    The else statement will run if you pass the check, and you fail every if and else if statement within the same scope.
    Could have also put the following instead of else: else if(0 <= score <= 5) grade = 'F';
    */
    else grade = 'F';
    return grade;
}

console.log(getGrade(30));
// 'A'

console.log(getGrade(24));
// 'Invalid grade!'

// The below code I fabricated to explain the if vs else if, and scope for if-else statements.

function ifVsElseIf(num, num2) {
    if(num > 5) console.log('First if statement passed for num');
    if(num > 10) console.log('First if statement passed for num');
    if(num2 > 5) console.log('First if statement passed for num2');
    else if(num2 > 10) console.log('First if statement passed for num2');
}

ifVsElseIf(11, 11);
/*
'First if statement passed for num'
'First if statement passed for num'
'First if statement passed for num2'

Note for num both if statements ran because they are independent of each other.
Note for num2 the first if or else if statement that passes the check will run.
*/

function scope(num) {
    if(num > 15) {
        console.log('num is greater than 15');
        if(num > 10) {
            console.log('num is greater than 10');
        }
    }
    else if(num > 5) console.log('num is greater than 5');
}

scope(11);
/*
'num is greater than 5'

Note how lines 67 and 73 are in the same scope, and line 69 is in a different scope.
*/