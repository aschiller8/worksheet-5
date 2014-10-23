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

function Yahtzee(list) {
  var i = 0; 
  while (i < 4) {
    if( list [i] !== list [ i + 1]){ 
      return 0;   }
    i = i + 1;
  }
return 50;
}

function total(arbitraryList) {
var sum=0;
var current;
current=0;
while (current !== arbitraryList.length){
sum=arbitraryList[current]+sum;
current=current+1;
}
return sum;
}

function FourKind(list) {
list.sort();
var equalities = 0;
var i = 0;
while (i !== list.length - 3) {
if (list[i] === list[i + 3]) {
equalities = equalities + 1;
}
i = i + 1;
}
if (equalities >= 1) {
return total(list);
}
else {
return 0;
}
} 

function straight(list) {
 list.sort();
  var i = 0;
  while (i < 4) {
    if (list[i] + 1 !== list[i + 1]) {
      return 0; }
   i = i + 1;
  }
  return 40;
}

function full_house(list) {
  list.sort();
  var i = 0
  var j = 3
  if (list[0] !== list[2] || list[3] !== list[4]) {
    if (list[0] !== list[1] || list[2] !== list[4]) {
      return 0;
    }
  }
  return 25;
} 

number 10 

function max(list) {
  var t = 0;
  var largest = - Infinity;
  while ( t < list.length) {
    if ( list[t] > largest) {
      largest = list[t];
    }
    t = 1
  }
  return largest;
}

max([3,1,66,5,3,2,8])
