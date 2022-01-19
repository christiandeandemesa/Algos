/*
Given an integer, n, print its first 10 multiples. Each multiple n * i (where 1 <= i <= 10) should be printed on a new line in the form: 

n * i = result.
*/

public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(bufferedReader.readLine().trim());
    
    // Created a for loop.
    for(int i = 1; i <= 10; i++) {
        int sum = n * i;

        /*
        String.format() formats a string by replace %s with the variables given in order:
        So it would be read as "n x i = sum" where each of the variables are replaced by their respective values.
        */
        System.out.println(String.format("%s x %s = %s", n, i, sum));
    }

    bufferedReader.close();
}