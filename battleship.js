var location1 = 3; // static position for the moment until we add randomization
var location2 = 4; // static position for the moment until we add randomization
var location3 = 5; // static position for the moment until we add randomization

var guess; // user's guess
var hits = 0; // number of hits
var guesses = 0; // number of guesses

var isSunk = false; // is the ship sunk?

while (isSunk == false ) {
    guess = prompt("Read, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
        }
    }
}