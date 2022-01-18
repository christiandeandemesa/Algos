'''
You have a sample of 100 values from a population with mean u = 500 and with standard deviation o = 80. Compute the interval that covers 
the middle 95% of the distribution of the sample mean; in other words, compute A and B such that P(A < x < B) = 0.95. Use the value of z = 
1.96. Note that z is the z-score.
'''

import math

values = 100
mean = 500
std = 80
z = 1.96

'''
Margin of Error Equation:

MOE = z * (math.sqrt(std ** 2 / n))
z is the z-score.
std is the standard deviation.
n is the sample size (i.e. values).
'''
MOE = (z * std) / math.sqrt(values)
# This is the answer for A.
print (round(mean - MOE, 2))
# This is the answer for B.
print (round(mean + MOE, 2))