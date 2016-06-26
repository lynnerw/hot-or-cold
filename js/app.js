
$(document).ready(function(){

	  /*--- Display information modal box ---*/
  	$(".what").click(function(){
    		$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  			$(".overlay").fadeOut(1000);
  	});

		// function generates random whole number between and inclusive of min but less than max
		function getRandomNum(min, max) {
				secretNum = Math.floor(Math.random() * (max - min) + min);
		  	// console.log('The secret number inside the function is ' + secretNum);
				return secretNum;
		};

		// function clears existing values
		function clearOldGame() {
				// empty the feedback space
				$('h2#feedback').empty();
				// set number of guesses to 0
				var count = 0;
				// display count
				$('#count').html(count);
				// clear the list of previous guesses
				$('ul#guessList').empty();
						//newGame = true;
						//return newGame;
		};


		//var newGame = true;

		function newGame() {

				clearOldGame();

				// on page load or new game select, generate random number
				var secretNum = getRandomNum(1, 100);
				// console.log('Page loaded or user selected new game and secret num is ' + secretNum);

				// insert prompt
				$('h2#feedback').append('I picked a number between 1 and 100. What do you think it is?');

				// the game has started
				count = 0;

				// get and check user input: each time the user guesses, test the guess against the random number and increase the count
				$('input[type="submit"]').click(function() {
						$('h2#feedback').empty();
						//clear the don't you have something better to do question
						$('#question').empty();

						var textInput = $('input[name="userGuess"]');
						var userNum = textInput.val();

						// console.log('User picked ' + userNum + '; the secret number is ' + secretNum);

						if((isNaN(parseInt(userNum))) || (parseInt(userNum > 100))) {

								$('h2#feedback').append('Oops. Your guess has to be a number greater than 0 and less 100.');

							// check whether the user guessed the secret number value
						} else if(userNum == secretNum) {
												$('h2#feedback').append('You are correct! The secret number was ' + secretNum + '.<br> Ready for another game?');
												count = 0;
												$('ul#guessList').empty();
												$('#count').html(count);

								// check whether user guess was above or below the secret number value
								} else if((userNum > secretNum) && ((userNum - secretNum) <= 10)) {
												$('h2#feedback').append('Ooops. Your guess was a little high but you\'re pretty warm.');
											} else if((userNum > secretNum) && ((userNum - secretNum) > 10)) {
													$('h2#feedback').append('Ooops. Your guess was a too high.');
												}
									} else if((userNum < secretNum) && ((secretNum - userNum) <= 10)) {
													$('h2#feedback').append('Ooops. Your guess was a little low but you\'re pretty warm.');
											} else if((userNum < secretNum) && ((secretNum - userNum) > 10)){
													$('h2#feedback').append('Ooops. Your guess was a too low.');
													}

										// display number they guessed
										$('ul#guessList').prepend('You just guessed ' + userNum + '<br>');
										// increment the count
										count++;
										// display the new count
										console.log('count is ' + count);
										$('#count').html(count);
										if (count == 5) {
												$('#question').append('<br>' + ' Don\'t you have something better to do?');
										}
										}

						// clear the input
						textInput.val('');

				// end check user input
				});

			// end definition of function newGame
			};

			newGame();

			// if user select new game
			$('.new').click(function() {
				newGame();
			});

});
