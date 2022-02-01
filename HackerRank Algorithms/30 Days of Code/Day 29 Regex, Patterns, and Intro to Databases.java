/*
Consider a database table, Emails, which has the attributes First Name and Email ID. Given N rows of data simulating the Emails table, 
print an alphabetically-ordered list of people whose email address ends in @gmail.com.
*/

public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int num = in.nextInt();

    // Creates a regex encased in double quotes that looks for any lowercase letter [a-z] at least once + followed by @gmail.com.
    String regex = "[a-z]+@gmail.com";

    /*
    If you want to match multiple strings against a regex, you must turn your regex into a pattern.
    Here we have a Pattern class named pattern that was compiled using our regex string.
    */
    Pattern pattern = Pattern.compile(regex);

    // Instantiates an empty resizable array named list.
    List<String> list = new ArrayList();

    // For loop to go through every HackerRank input.
    for(int i = 0; i < num; i++) {

        // Saves the name and email in separate variables.
        String name = in.next();
        String email = in.next();

        /*
        The Matcher class named matcher takes a pattern and a string (email), and will look for multiple occurences of that string 
        matching that pattern.
        */
        Matcher matcher = pattern.matcher(email);

        /*
        .find() returns true if matcher found the regex in the string.
        .add() adds the given data to the array (list);
        */
        if(matcher.find()) list.add(name);
    }

    // Sorts the list alphabetically.
    Collections.sort(list);

    // For every element (name) in the array (list), print the element to he console.
    for(String name : list) System.out.println(name);
    in.close();
}