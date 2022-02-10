"""
Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be 
called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, 
where k = (n + 1) / 2. You need to find the lexicographically smallest zig zag sequence of the given array.
"""

def findZigZagSequence(a, n):

    # Sorts the array.
    a.sort()

    # Find the middle number in the array.
    mid = int((n + 1)/2) - 1

    # Swaps the positions of the middle number and the last number in the array.
    a[mid], a[n-1] = a[n-1], a[mid]

    # st is the number after the middle index in the array.
    st = mid + 1

    # ed is the number before the last index in the array.
    ed = n - 2

    # While loop reverses the order of the indices from start to end to get the decrementing side of the zig zag sequence.
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1

    # For...in statement prints out each index to the console.
    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')

    # Empty return ends the function.
    return