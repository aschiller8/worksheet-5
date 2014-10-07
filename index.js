"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.

function minimum_of_two(first_number, second_number) {
  var minimum;
  if (first_number < second_number) {
    minimum = first_number;
  } 
  else {
    minimum = second_number;
  }
  return minimum;
}

function coin_flip() {
  var heads_or_tails;
  if (Math.random() < 0.5) {
    heads_or_tails = 'heads';
  } 
  else {
    heads_or_tails = 'tails';
  }
  return heads_or_tails;
}


function six_sided_dice() {
  var dice = Math.ceil(Math.random() * 6);
  return dice;
}


// Problem 3

function five_rolls() {
	var list = [];
	var i = 0;
	while (i < 5) {
		list[i] = six_sided_dice();
		i += 1;
	}
	return list;
}

