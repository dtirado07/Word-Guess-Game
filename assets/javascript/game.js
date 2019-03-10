// Variables
var wins = 0;
var worldFood = ["TACOS", "MOLE", "PAELLA", "PIZZA", "HAMBURGUESA", "CURRY", "CEVICHE", "SUSHI", "RAMEN", "FALAFEL",
    "KEBAB", "PHO", "AREPAS", "FEIJOADA", "TANDOORI", "FONDUE", "SARMALE"];
var lostText = document.getElementById("lost");
var tieText = document.getElementById("tie");
game();
function game() {
    var guess = 12;
    document.onkeyup = function (event) {
        var wordGuess = worldFood[Math.floor(Math.random() * worldFood.length)];
        var wordGuessArr = wordGuess.split("");
        var wordHideArr = [];
        var wordHideShow = "";
        for (i = 0; i < wordGuess.length; i++) {
            wordHideArr[i] = "_";
            wordHideShow = wordHideArr.toString();
            wordHideShow = wordHideShow.replace(/,/g, " ");
            var wordText = document.getElementById("word");
            wordText.textContent = wordHideShow;

        }
        console.log(wordGuess);
        document.onkeyup = function (event) {
            var userGuess = event.key;
            userGuess = userGuess.toUpperCase();
            // var userGuessArr = [];
            // userGuessArr.push(userGuess);
            // console.log(userGuessArr);
            var userLetter = document.getElementById("letters");
            userLetter.append(userGuess);
            guess = guess - 1;
            var guessText = document.getElementById("guesses");
            guessText.textContent = guess;
            console.log(guess);
            if (guess > 0) {
                for (j = 0; j < wordGuessArr.length; j++) {
                    if (userGuess === wordGuessArr[j]) {
                        console.log(userGuess);
                        wordHideArr[j] = userGuess;
                        wordHide2 = wordHideArr.toString();
                        wordHide2 = wordHide2.replace(/,/g, " ");
                        var userText = document.getElementById("word");
                        userText.textContent = wordHide2;
                        wordHide = wordHideArr.toString();
                        wordHide = wordHide.replace(/,/g, "");
                        console.log(wordHideArr);
                        console.log(wordHide);
                        if (wordHide === wordGuess) {
                            wins++;
                            var winText = document.getElementById("wins");
                            winText.textContent = wins;
                            guessText.textContent = "";
                            userLetter.textContent ="";
                            var audio = new Audio('audio.mp3');
                            audio.play();
                            alert("You won press any key for new word");

                            function image(thisImg) {
                                var img = document.getElementById("wordImg");
                                img.src = "assets/images/" + thisImg;
                            }
                            if (wordGuess === "AREPAS") {
                                image("AREPAS.jpg");
                            }

                            if (wordGuess === "CEVICHE") {
                                image("CEVICHE.jpg");
                            }
                            if (wordGuess === "CURRY") {
                                image("CURRY.jpg");
                            }
                            if (wordGuess === "FALAFEL") {
                                image("FALAFEL.jpg");
                            }
                            if (wordGuess === "FEIJOADA") {
                                image("FEIJOADA.jpg");
                            }
                            if (wordGuess === "FONDUE") {
                                image("FONDUE.jpg");
                            }
                            if (wordGuess === "HAMBURGUESA") {
                                image("HAMBURGESA.jpg");
                            }
                            if (wordGuess === "KEBAB") {
                                image("KEBAB.jpg");
                            }
                            if (wordGuess === "MOLE") {
                                image("MOLE.jpg");
                            }
                            if (wordGuess === "PAELLA") {
                                image("PAELLA.jpg");
                            }

                            if (wordGuess === "PIZZA") {
                                image("PIZZA.jpg");
                            }

                            if (wordGuess === "PHO") {
                                image("PHO.jpg");
                            }

                            if (wordGuess === "RAMEN") {
                                image("RAMEN.jpg");
                            }
                            if (wordGuess === "SARMALE") {
                                image("SARMALE.jpg");
                            }
                            if (wordGuess === "SUSHI") {
                                image("SUSHI.jpg");
                            }
                            if (wordGuess === "TACOS") {
                                image("TACOS.jpg");
                            }
                            if (wordGuess === "TANDOORI") {
                                image("TANDOORI.jpg");
                            }
                            console.log("wins " + wins);
                            game();
                        }
                    }

                }
            }

            else {
                guessText.textContent = "";
                userLetter.textContent ="";
                alert("you lost, press any key for new word");
                game();
            }
        }
    }
}