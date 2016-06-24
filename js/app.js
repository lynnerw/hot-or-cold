
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
var secretNum = getRandomNum(1, 100);
// console.log('The secret number outside the function is ' + secretNum);

		// compare user input with system-generated number
		var userNum = prompt('Please enter a whole number greater than zero and less than 100.', 90);

		// prompt user for an integer
		while (isNaN(parseInt(userNum))) {
		  document.write('Ooops. I need a whole number. Try again...' + '<br>');
		  var userNum = prompt('Please enter a whole number greater than zero and less than 100.', 90);
		  }
			// check whether the user guessed the secret number value
		var userNum = parseInt(userNum);
		if ((parseInt(userNum) % parseInt(userNum)) === 0) {
						console.log('User picked ' + userNum + '; the secret number is ' + secretNum);
		        document.write('You picked ' + (parseInt(userNum)) + '.' + '<br>');
						if (userNum == secretNum) {
							document.write('Awesome! You guessed the secret number!')
						} // checkw whether the user's guess was too high or too low
						else if (parseInt(userNum) > secretNum) {
							document.write('Hmmm. That\'s a little high.')
						} else {
							document.write('Ooops; you need to bump that number up a bit.')
						}

		      };

});
