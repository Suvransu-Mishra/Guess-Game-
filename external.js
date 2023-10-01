var target,target1,finished = false;
var guess_input_text;
var guess_input;
var guesses = 0;
function game() {
  target = Math.random() * 100;
  target1 = Math.floor(target) + 1;
  while (!finished) {
    guess_input_text = prompt(
      "The computer has chosen a number between 1 and 100. Try to guess the number"
    );
    guess_input = parseInt(guess_input_text);
    guesses++;
    if (target1 === guess_input) {
        alert("Yes you entered the right answer in " + guesses + " guesses");
    } else {
      if (guess_input < target1) {
        alert("The number is smaller");
      } else if (guess_input > target1) {
        alert("The number is larger");
      } else if (isNaN(guess_input)) {
        alert("Please enter a valid number");
      } else if (guess_input < 1 || guess_input > 100) {
        alert("Out of range");
      }
    }
  }
}
