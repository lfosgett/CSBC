//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));
//alert(guess);


//check guess
if(guess == secretNumber) {
    alert("YOU GOT IT RIGHT!");
}
//check if guess is higher
else if(guess) > secretNumber) {
    alert("TOO HIGH");
}
//check if guess is lower
else {
    alert("TOO LOW");
}