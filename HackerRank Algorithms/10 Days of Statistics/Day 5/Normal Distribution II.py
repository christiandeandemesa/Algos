'''
The final grades for a Physics exam taken by a large group of students has a mean of 70 and a standard deviation of 10. If we can 
approximate the distribution of these grades by a normal distribution, what percentage of the students:

Scored higher than 80 (i.e., have a grade > 80)?
Passed the test (i.e., have a grade >= 60)?
Failed the test (i.e., have a grade < 60)?
Find and print the answer to each question on a new line, rounded to a scale of 2 decimal places.
'''

import math

# Hard coded the values for mean, std, highGrade, and passGrade
mean = 70
std = 10
highGrade = 80
passGrade = 60
equation = lambda x: 0.5 * (1 + math.erf((x - mean) / (std * math.sqrt(2))))

'''
Notice answers must be printed as a percentage, so we are multiplying them by 100 and subtracting it from 100.
'''
print('{:.2f}'.format((100 - (equation(highGrade) * 100))))
# 15.87
print('{:.2f}'.format((100 - (equation(passGrade) * 100))))
# 84.13
print('{:.2f}'.format((equation(passGrade) * 100)))
# 15.87