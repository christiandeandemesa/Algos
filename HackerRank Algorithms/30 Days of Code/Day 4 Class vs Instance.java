/*
Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter. The constructor 
must assign initialAge to age after confirming the argument passed as initialAge is not negative; if a negative argument is passed as 
initialAge, the constructor should set age to 0 and print 'Age is not valid, setting age to 0.'. In addition, you must write the following 
instance methods:

1. yearPasses() should increase the age instance variable by 1.
2. amIOld() should perform the following conditional actions:

    If age < 13, print 'You are young.'.
    If age >= 13 and age < 18, print 'You are a teenager.'.
    Otherwise, print 'You are old.'.
*/

// This is a class constructor. When HackerRank creates an object (i.e. an instance of a class) and assigns it an initialAge (e.g. 10)...
public Person(int initialAge) {

    // If the initialAge assigned is less than 0, set the object's age (a property in the Person class) to 0.
    if(initialAge < 0) {
        age = 0;
        System.out.println("Age is not valid, setting age to 0.");
    }

    // If the initialAge assigned is 0 or greater, set the object's age to the assigned initialAge.
    else {
        age = initialAge;
    }
}

// This is a method that can be run on a Person object.
public void amIOld() {
    String result = "";
    if(age < 13) {
        result = "You are young.";
    }
    else if(age >= 13 && age < 18) {
        result = "You are a teenager.";
    }
    else {
        result = "You are old.";
    }
    System.out.println(result);
}

public void yearPasses() {

    // This increases the Person object's age by 1.
    age += 1;
}