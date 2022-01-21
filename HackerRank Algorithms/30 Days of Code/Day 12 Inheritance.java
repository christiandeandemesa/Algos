/*
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person 
and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:
    A Student class constructor, which has 4 parameters:
        1. A string, firstName.
        2. A string, lastName.
        3. An integer, idNumber.
        4. An integer array (or vector) of test scores, scores.
    A char calculate() method that calculates a Student object's average and returns the grade character representative of their 
    calculated average:

    | Letter |  Average (a)   |
    |   O    | 90 <= a <= 100 |
    |   E    | 80 <= a <= 90  |
    |   A    | 90 <= a <= 80  |
    |   P    | 90 <= a <= 70  |
    |   D    | 90 <= a <= 55  |
    |   T    |     a < 40     |
*/

// The Student subclass extends off the Person superclass, and inherits the superclass' methods and behaviors.
class Student extends Person{
    private int[] testScores;
    
    // This is the subclass constructor.
    Student(String firstName, String lastName, int idNumber, int[] scores){
		
        // This calls on the superclass constructor.
        super(firstName, lastName, idNumber);

        // Defines a new field for only the subclass.
		this.testScores = scores;
	}
	
    // This is a new method for only the subclass.
	public char calculate(){

        // Calculates the average of all the test scores.
		int sum = 0;
		for(int i = 0; i < testScores.length; i++){
			sum += testScores[i];
		}
		int average = sum / testScores.length;
		
        // If-else statements to reflect the above table.
		if(average >= 90) return 'O';
		else if(average >= 80) return 'E';
		else if(average >= 70) return 'A';
		else if(average >= 55) return 'P';
		else if(average >= 40) return 'D';
		else return 'T';
	}
}