'''
The number of tickets purchased by each student for the University X vs. University Y football game follows a distribution that has a mean 
of u = 2.4 and a standard deviation of o = 2.0.

A few hours before the game starts, 100 eager students line up to purchase last-minute tickets. If there are only 250 tickets left, what 
is the probability that all 100 students will be able to purchase tickets?
'''

import math

def clm(input):
    max_tickets = 250
    num_students = 100
    mean = 2.4
    std = 2.0
    mean_sum = num_students * mean
    std_sum = math.sqrt(num_students) * std

    # Notice I wrote out the original version of the cumulative distribution function without N.
    result = 0.5 * (1 + math.erf((max_tickets - mean_sum) / (std_sum * math.sqrt(2))))
    return round(result, 4)

print(clm('250\n100\n2.4\n2.0'))