var game = confirm("Do you want to play a game?");
if (game === false){
    alert("You did not become a millionaire, but can.");
} else {
    var continueGame = true;
    var maxNumber = 5;
    var attempts = 3;
    var maxPrize = 10;
    var totalPrize = 0;
    do {
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    while (attempts > 0) {
        var userNumber = parseInt(prompt('Enter a number from 0 to ' + (maxNumber) +
        '\nAttempts left: ' + attempts +
        '\nTotal prize: ' + totalPrize +
        '\nPossible prize on current attempt: ' + maxPrize + '$', '0'));
        if (userNumber === randomNumber) {
            totalPrize += maxPrize;
            var continueGameAgain = confirm("Congratulation! Your prize is: " + totalPrize + ". " 
            + "Do you want to continue?");
            if (continueGameAgain === true) {
                maxPrize *= 3;
                maxNumber *= 2;
                attempts = 3;
                randomNumber = Math.floor((Math.random() * maxNumber) + 1);
            } else {
                break;
            }
        } else {
        maxPrize = Math.floor(maxPrize / 2);
        attempts--;
        }
    } 
    alert("Thank you for a game. Your prize is: " + totalPrize);
    continueGame = confirm("Do you want to play again?");
} while (continueGame); 
}
