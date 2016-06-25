
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		// generate a number between 1-100
		function getRandomNum(min, max) {
			secretNum = Math.floor(Math.random() * (max - min) + min);
		  // console.log('The secret number inside the function is ' + secretNum);
			return secretNum;
		};

		// on new game request generate random secret number
		$('.new').click(function() {
			$('h2#feedback').empty();
			$('h2#feedback').append('What\'s your guess?');
			var secretNum = getRandomNum(1, 100);
				console.log('User selected new game and secret num is ' + secretNum);
			return secretNum;
			count = 0;
		});

		// user input: each time the user guesses, test the guess against the random number and increase the count
		var count = 0;
		$('input[type="submit"]').click(function() {

			  $('h2#feedback').empty();
				var textInput = $('input[name="userGuess"]');
				var userNum = textInput.val();
					// console.log('userNum is ' + userNum);
				if (isNaN(parseInt(userNum))) {
						$('h2#feedback').append('Oops. Your guess has to be a whole number greater than 0 and less 101.');
					}
				else {
					if (userNum > 100) {
						$('h2#feedback').append('Oops. Your guess has to be greater than 0 and less 101.');
					}
					else {

						if (count <= 5) {

								// check whether the user guessed the secret number value
							console.log('User picked ' + userNum + '; the secret number is ' + secretNum);
						if (userNum == secretNum) {
							$('h2#feedback').append('You are correct! The secret number was ' + secretNum + '. Nice job.');
							count = 0;
							$('ul#guessList').empty();
							$('#count').html(count);
						}
							else  {
				  			if (userNum > secretNum) {
									// console.log('userNum is greater than secretNum');
									$('h2#feedback').append('Ooops. Your guess was a little too high.');
									}
									else {
										// console.log('userNum is less than than secretNum');
										$('h2#feedback').append('Hmmm. Your guess was a little too low.');
									}
								  //display number they guessed
									$('ul#guessList').prepend('You just guessed ' + userNum + '<br>');
									// increment the count
									count++;
									// display the new count; console.log('count is ' + count);
									$('#count').html(count);
								}
				}
				else {
					$('#question').append('<br>' + ' Don\'t you have something better to do?');
				}
			}
			// clear the input
			textInput.val('');
		}
		});

// check that user input is an integer less than 100
//if (isNaN(parseInt(userNum))) {
//}

});
