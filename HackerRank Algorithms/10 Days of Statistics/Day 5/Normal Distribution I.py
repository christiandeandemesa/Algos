'''
In a certain plant, the time taken to assemble a car is a random variable, X, having a normal distribution with a mean of 20 hours and a 
standard deviation of 2 hours. What is the probability that a car can be assembled at this plant in:

1. Less than 19.5 hours?
2. Between 20 and 22 hours?
'''

# Needed for mathematical functions.
import math

# Hard coded the values for mean and std.
mean = 20
std = 2

'''
lambda is similar to an arrow function in JavaScript. It takes an argument (x) to be used in the expression (i.e. the code after the 
colon).
The expression used in the cumulative distribution function.
I used Python3 instead of JavaScript for this problem because we have access to math.erf() which is the error function. If I did this in
JavaScript, I would have to write it out by hand.
'''
equation = lambda x: 0.5 * (1 + math.erf((x - mean) / (std * math.sqrt(2))))

'''
.format() formats what is given in the parentheses based on what came before it.
'{:.3f}' specifies three digits of precision on a floating point number (f).
'''
print('{:.3f}'.format(equation(19.5)))
# 0.401
print('{:.3f}'.format(equation(22) - equation(20)))
# 0.341