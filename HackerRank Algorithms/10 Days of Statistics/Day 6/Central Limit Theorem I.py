'''
A large elevator can transport a maximum of 9800 pounds. Suppose a load of cargo containing 49 boxes must be transported via the elevator. 
The box weight of this type of cargo follows a distribution with a mean of u = 205 pounds and a standard deviation of o = 15 pounds. Based 
on this information, what is the probability that all 49 boxes can be safely loaded into the freight elevator and transported?
'''

import math

def clm(input):

    # Hardcoded these variables.
    max_weight = 9800
    num_boxes = 49
    mean = 205
    std = 15

    '''
    Within the central limit theorem, N(u_prime, o_prime) where u_prime (i.e. mean_sum) = n (i.e. num_boxes) *
    u (i.e. mean), and o_prime = math.sqrt(n) * o (i.e. std).
    Then N = (n - u_prime) / o_prime.
    '''
    mean_sum = num_boxes * mean
    std_sum = math.sqrt(num_boxes) * std
    N = (max_weight - mean_sum) / std_sum

    # Notice the modified use of the cumulative distribution function
    result = 0.5 * (1 + math.erf(N / math.sqrt(2)))

    # round() takes the first parameter (i.e. result) and rounds it to the number of decimal places given in the second parameter (i.e. 4).
    return round(result, 4)

print(clm('9800\n49\n205\n15'))