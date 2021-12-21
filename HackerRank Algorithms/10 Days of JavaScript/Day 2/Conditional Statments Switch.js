/*
Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters 
(i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a,e,i,o,u}, then return A.
If the first character in string s is in the set {b,c,d,f,g}, then return B.
If the first character in string s is in the set {h,j,k,l,m}, then return C.
If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.
*/

function getLetter(s) {
    let letter;

    /*
    string.charAt(x) gets the character at index x in the string.
    Note it is zero-indexed (e.g. In the word 'string', 's' is at index 0 and 't' is at index 1).
    The switch block takes an argument in the parentheses and will run the first case or default that the argument passes.
    */
    switch(s.charAt(0)) {

        /*
        The case statement works similar to an if statment.
        The case statement will run if s.charAt(0) is 'a', 'e', 'i', 'o', or 'u'.
        */
        case 'a' || 'e' || 'i' || 'o' || 'u':
            letter = 'A';

            // The break keyword will stop the switch block from running the other cases.
            break;
        case 'b' || 'c' || 'd' || 'f' || 'g':
            letter = 'B';
            break;
        case 'h' || 'j' || 'k' || 'l' || 'm':
            letter = 'C';
            break;
        
        /*
        The default statement works similar to an else stament.
        Could have put the following instead of default: case 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z':
        Note there is no break keyword because default will automatically break the switch block.
        */
        default:
            letter = 'D';
    }
    return letter;
}

console.log(getLetter('abh'));
// 'A'