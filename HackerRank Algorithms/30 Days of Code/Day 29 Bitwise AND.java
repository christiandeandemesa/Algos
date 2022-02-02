/*
Given set S = {1, 2, 3, ..., N}. Find two integers, A and B (where A < B), from set S such that the value of A & B is the maximum possible and also less than a given integer, K. In this case, & represents the bitwise AND operator.
*/

public static int bitwiseAnd(int N, int K) {
    int maxed = 0;
    for (int b = 2; b <= N; b++) {
        for (int a = 1; a < b; a++) {
            if (a == b) continue;
            int ab = a&b;
            if (ab > maxed && ab < K) maxed = ab;
        }
    }
    return maxed;
}