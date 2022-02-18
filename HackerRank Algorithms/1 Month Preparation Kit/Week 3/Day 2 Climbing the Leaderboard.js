/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its 
leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
*/

function climbingLeaderboard(ranked, player) {
    let result = [];

	/*
	uniqueRanked is a new Set that stores all the unique values in ranked (new Set(ranked)) spread into an array ([...]) with 0 as the last 
	element of the array to account for numbers smaller than the smallest player number.
	*/
	const uniqueRanked = [...new Set(ranked), 0];

	// pointer first points to 0's index.
	let pointer = uniqueRanked.length - 1;

	// forEach calls the arrow function on every element (score) in the player array.
	player.forEach(score => {

		// While the current element is greater than the element at the pointer, move the the pointer to the left.
		while(score >= uniqueRanked[pointer]) pointer -= 1;

		/*
		Adds 2 to the pointer to get the correct position of where the current element would be in the uniqueRanked array.

		For example:
		If uniqueRanked = [100, 90, 80, 0] and the current score = 70, then pointer stops when pointing at 80 (pointer = 2).
		We add 1 to move 70 behind 80 instead of replacing 80, then add 1 more because arrays are zero-indexed.
		So 70 will be at the fourth position.
		*/
		result.push(pointer + 2);
	})
	return result;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));
// [4, 3, 1]