/*
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and 
several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop 
(like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

1. Your function must always return the entire record collection object.
2. If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
3. If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
4. If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
5. If value is an empty string, delete the given prop property from the album.
*/

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if(prop !== 'tracks' && value !== '') records[id][prop] = value; // 2.
    if(prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) records[id][prop] = [value]; // 3.
    if(prop === 'tracks' && value !== '') records[id][prop].push(value); // 4.
    if(value === '') delete records[id][prop]; // 5.
    return records; // 1.
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// artist should be 'ABBA'.
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// tracks should have 'Take a Chance on Me' at the last index.
console.log(updateRecords(recordCollection, 2548, "artist", ""));
// artist should not be set.
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// tracks should have 'Addicted to Love' at the last index.
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
// tracks should have '1999' at the first index.
console.log(updateRecords(recordCollection, 2548, "tracks", ""));
// tracks should not be set.
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
// albumTitle should be 'Riptide'.