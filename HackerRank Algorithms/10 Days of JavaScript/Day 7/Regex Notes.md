- Notes originate from [here](https://regexone.com/lesson/introduction_abcs).

# Lesson 1: Introduction
- Regular Expressions (Regex) are patterns meant to match a specific sequence of characters (i.e. string).
- Characters include letters, digits, punctuation, symbols, and whitespace.
- \d indicates the matching of any single digit from zero through nine.

# Lesson 2: The Dot
- The dot metacharacter (.)  matches any single character.
- \. indicates the matching of a single period.

# Lesson 3: Matching Specific Characters
- You can match specific characters by placing them within square brackets ([]).
    - For example, [abc] indicates the matching of a single a, b, or c letter.

# Lesson 4: Excluding Specific Characters
- You can exclude the matching of specific characters by placing them within square brackets with the caret (^).
    - For example, [^def] indicates the matching of a single character other than the letters d, e, and f.

# Lesson 5: Character Ranges
- You can create a range of sequential characters using square brackets.
    - For example, [0-5] indicates the matching of a single digit from 0 through 5.
    - For example, [^6-9] indicates the matching of a single character other than the digits six through 9.
- You can also create multiple character ranges within one set of square brackets.
    - For example, [A-Za-z0-9_] indicates the matching of a single uppercase letter, lowercase letter, digit, or underscore.
    - You can alternatively use \w instead of [A-Za-z0-9_].

# Lesson 6: Repetition
- You can match a repetition of characters by using curly brackets ({}).
    - For example, a{3} indicates the matching of three consecutive a's.
    - For example, 0{1,5} indicates the matching of at least one 0 and at most five consecutive 0's.
    - For example, [xyz]{5} indicates the matching of five consecutive x, y, or z letters.
    - For example, .{2,4} indicates the matching of at least two consecutive characters and at most four consecutive characters.

# Lesson 7: Kleene
- The Kleene Star (*) matches zero or more of a given character.
    - For example, .* indicates the matching of at least zero consecuitve characters and at most infinite consecutive characters.
- The Kleene Plus (+) matches one or more of a given character.
    - For example [abc]+ indicates the matching of at least one a, b, or c letter and at most infinite consecutive a, b, or c letters.

# Lesson 8: Characters Optional
- The question mark metacharacter (?) matches zero to one of a given character.
    - For example, ab?c indicates the matching of the letter a, an optional letter b, and the letter c (e.g. abc and ac match this regex).
- \? indicates the matching of a single question mark.

# Lesson 9: Whitespace
- A space ( ) matches a single whitespace.
- \t matches consecutive whitespaces.
- \n matches a new line.
- \r matches a carriage return (i.e. moves the cursor to the beginning of the line without advancing to the next line).
- \s matches any of the specific whitespaces defined above.

# Lesson 10: Starting and Ending
- The caret metacharacter matches the first character of the string.
- The dollar sign ($) matches the last character of the string.

# Lesson 11: Capture Groups
- Regex does not only match but can capture groups of characters by placing them within parentheses ().
    - For example, ^(IMG\d+)\.png$ indicates the matching of any png filename, and the capturing of any filename without the png extension.

# Lesson 12: Nested Groups
- You can also capture multiple groups of characters by nesting parentheses within other parentheses.
    - For example, ^(IMG(\d+))\.png$ indicates the capturing of the filename without the png extension, and the capturing of the picture number.
- In the above example, the order of captures is read from left to right so the filename group comes before the picture number group.

# Lesson 13 omitted for brevity

# Lesson 14: Conditional
- The logical OR (|) matches different possible (sets of) characters.
    - For example, A|a indicates the matching of a single uppercase or lowercase letter a.

# Lesson 15: Other Special Characters
- \D indicates the matching of a single non-digit character.
- \S indicates the matching of a single non-whitespace.
- \W indicates the matching of a single non-alphanumeric character (e.g. Alphanumeric characters are any letter or number).
- \b indicates a word boundary.
    - For example \bis\b indicates the matching of any is that is not attached to (a) character(s) (e.g. island would not match).
- Back referencing allows you to reference back to captured groups.
    - For example, \1 indicates the first captured group and \2 indicates the second captured group.