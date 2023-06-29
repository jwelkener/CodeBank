// The following code takes any group of words and capitalizes the first letter only of each word

function capitalize(str) {

	const words = str.split(' '); //divides the string into individual words using the split method

	const capitalizedWords = words.map(function(word){
		const firstLetter = word.charAt(0).toUpperCase(); //capitalizes the first letter of each word
		const restOfWord = word.slice(1).toLowerCase(); // converts the rest of the word to lower case
		return firstLetter + restOfWord; //puts the first letter and remaining letters of the word back together
	})
  
	return capitalizedWords.join(' '); //rejoins the split words back together with a space in between
  }
  
  document.addEventListener('DOMContentLoaded', function() { //ensures the HTMl document is finished loading before executing the function
	const inputElement = document.getElementById('input');
	const outputElement = document.getElementById('output');
	const capitalizeButton = document.querySelector('button[type="submit"]');
  
	capitalizeButton.addEventListener('click', function(event) {
	  event.preventDefault();

	  const inputText = inputElement.value;
	  const capitalizedText = capitalize(inputText);
	  outputElement.textContent = capitalizedText;
	});
  });
  