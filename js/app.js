
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

		// user input: each time the user guesses, test the guess against the random number and increase the count
		var count = 0;
		$('input[type="submit"]').click(function() {
				var textInput = $('input[name="userGuess"]');
				var userNum = textInput.val();
					// console.log('userNum is ' + userNum);

				if (count <= 5) {
							var secretNum = getRandomNum(1, 100);
								// console.log('The secret number outside the function is ' + secretNum);
								// check whether the user guessed the secret number value
							console.log('User picked ' + userNum + '; the secret number is ' + secretNum);
							$('#guessList ul').html('You picked ' + userNum + '.' + '<br>');
				  		if (userNum > secretNum) {
									$('#guessList ul').html('Hmmm. Your guess was a little too high.');
								}
								else {
									$('#guessList ul').html('Hmmm. Your guess was a little too low.');
								}
							count++;
							// console.log('count is ' + count);
							$('#count').html(count);
				}
				else {
					$('#question').append('<br>' + ' Don\'t you have something better to do?');
				}

			// clear the input
			textInput.val('');

		});

// check that user input is an integer less than 100
//if (isNaN(parseInt(userNum))) {
//}

});
