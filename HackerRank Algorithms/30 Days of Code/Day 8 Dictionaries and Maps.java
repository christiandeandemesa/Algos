/*
Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for name is not found, print Not found instead.
*/

public static void main(String []argh){
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();

    // Creates a hashmap named phoneBook where the key is a string, and its value is an integer.
    Map<String, Integer> phoneBook = new HashMap<String, Integer>();

    // Adds the input from HackerRank to the hashmap.
    for(int i = 0; i < n; i++){
        String name = in.next();
        int phone = in.nextInt();
        phoneBook.put(name, phone);
    }

    // The while loop runs as long as there is another input provided by HackerRank.
    while(in.hasNext()){
        String s = in.next();

        // Creates a new variable to hold the number associated with key (s) if that key exists in the phoneBook hashmap.
        Integer phoneNumber = phoneBook.get(s);

        /*
        Using a ternary operator where if phoneNumber is a number, print a string concatenation. If phoneNumber returned null because a 
        string did not exist as a key in the hashmap, return 'Not found'.
        */
        System.out.println(phoneNumber != null ? s + "=" + phoneNumber: "Not found");
    }
    in.close();
}