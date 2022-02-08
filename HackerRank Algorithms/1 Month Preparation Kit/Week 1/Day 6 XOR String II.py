# Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.

def strings_xor(s, t):

    # Instantiates an empty string as the result.
    res = ""

    # For loop runs for length of s.
    for i in range(len(s)):

        """
        ^ is the XOR operator. 
        If s[i] === t[i], it equals to 0.
        If s[i] !== t[i], it equals to 1.
        bool(1) === true.
        bool(0) === false.
        """
        if bool(1 - int(s[i]) ^ int(t[i])):
            res += '0'
        else:
            res += '1'
    return res

s = '10101'
t = '00101'
print(strings_xor(s, t))