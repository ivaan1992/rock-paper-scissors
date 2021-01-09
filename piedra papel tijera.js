const game = () => {
    let pScore = 0;
    let cScore = 0;



    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        });         //playbtn close

    };          //start game close


    function isGameOver() {
        return pScore === 5 || cScore === 5;
    }  // gameover close
    //play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");

        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function () {

                //computerchoice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //
                if (isGameOver()) {
                    alert("Game over, click F5 to play again");
                    return;
                } 

                compareHands(this.textContent, computerChoice);


            });   //close option.addeventlistener 

        });   //close options.foreach

    };   //close play match 

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };    //close updatescore

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        //checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }    //close if 

        //checking for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            }  //close if computerchoice
            else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } //close for else
        }  //close if playerchoice

        //checking for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }  //close if computerchoice
            else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } //close for else
        }  //close if playerchoice


        //checking for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            }  //close if computerchoice
            else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } //close for else
        }  //close if playerchoice




        // GAME OVER 
        function playRound(e) {
            if (isGameOver()) {
                alert("Game over, click F5 to play again");
                return;
            }    //IF GAME OVER CLOSE
            const playerChoice = e.target.id.toUpperCase();
            const computerChoice = getRandomChoice();

        }       //PLAYROUND CLOSE







    }    //close comparehands





    //Is call all the inner functions
    startGame();
    playMatch();
};          //const game close

//start the game function
game();

