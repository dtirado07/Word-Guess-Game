// Variables
var wins = 0;
var guess = 10;
var worldFood = ["TACOS", "MOLE", "PAELLA", "PIZZA", "HAMBURGUESA", "CURRY", "CEVICHE", "SUSHI", "RAMEN", "FALAFEL",
    "KEBAB", "PHO", "AREPAS", "FEIJOADA", "TANDOORI", "FONDUE", "SARMALE"];

document.onkeyup = function (event) {
    var userEnter = event.key;
    if (userEnter === "Enter") {
        var wordGuess = worldFood[Math.floor(Math.random() * worldFood.length)];
        console.log(wordGuess);
        var wordGuessArr = wordGuess.split("");
        var wordHideArr = [];
        var wordHideShow = "";
        for (i = 0; i < wordGuess.length; i++) {
            wordHideArr[i] = "_";
            wordHideShow = wordHideArr.toString();
            wordHideShow = wordHideShow.replace(/,/g, " ");
            
        }
        document.onkeyup = function (event) {
            var userGuess = event.key;
            userGuess = userGuess.toUpperCase();
            guess = guess -1;
            console.log(guess);
            if (guess > 0) {
                for (j=0; j<wordGuessArr.length; j++){
                    if (userGuess === wordGuessArr[j]) {
                        console.log(userGuess);
                        wordHideArr[j]=userGuess;
                        wordHide = wordHideArr.toString();
                        wordHide = wordHide.replace(/,/g, "");
                        console.log(wordHideArr);
                        console.log(wordHide);
                        if (wordHide === wordGuess) {
                            console.log("You won");
                        }
                    }
                   
                }
            }

            else {
                alert("you lost");
            }
          
        }




        //var wordHide = wordGuess.replace(/\D+/gi,"_");
        console.log(wordHideShow);
        console.log(wordGuessArr);
        console.log(userEnter);
        
    }

    else {
        alert("Press Enter to Start");
    }
    // Randomly chooses a word from the worldFood array

    // Alerts the key the user pressed (userGuess).
    //ComputerText.textContent = "Computer choose: " + computerGuess;
    //UserText.textContent = "User Choose " + userGuess;
    //winText.textContent = "Wins: " + wins;
    //lostText.textContent = "Lost: " + loses;
    //tieText.textContent = "Ties: " + ties;
}

//worldFood.forEach(function(word){
//    console.log(word);
//})