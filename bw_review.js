"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Dan Hunt
   Date:   12.14.18
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

window.onload = init;

function init() {
	var stars = document.querySelectorAll("#stars img");	
	for (var i = 0; i < stars.length; i++) {
		stars[i].style.cursor = "pointer";
		stars[i].addEventListener("mouseenter", lightStars);
		
		stars[i].addEventListener("click", 
		function(e) {
			e.target.removeEventListener("mouseleave", turnOffStars);
			});
			
		stars[i].addEventListener("mouseleave", turnOffStars);		
	}	
	document.getElementById("comment").addEventListener("keyup", updateCount);	
}

function lightStars(e) {
	var starNumber = e.target.alt;
	var stars = document.querySelectorAll("#stars img");
	for (var i = 0; i < starNumber; i++ ) {
			stars[i].src = "bw_star2.png"
		}
	for (var i = starNumber; i < 5; i++) {
		stars[i].src = "bw_star.png";
	}
	document.getElementById("rating").value = starNumber;
	
	}
	
function turnOffStars(e) {
		var stars = document.querySelectorAll("#stars img");	
		for (var i = 0; i < stars.length; i++) {
			stars[i].src = "bw_star.png";
			}
		document.getElementById("rating").value = null;
}
	
function updateCount(e) {
	var commentText = document.getElementById("comment").value;
	var charCount = countCharacters(commentText);
	var wordCountBox = charCount + "/1000";
	document.getElementById("wordCount").value = wordCountBox;
	if (charCount > 1000) {
		document.getElementById("comment").style.backgroundColor = "red";
		document.getElementById("comment").style.color = "white";
	}
	if (charCount <= 1000) {
		document.getElementById("comment").style.backgroundColor = "white";
		document.getElementById("comment").style.color = "black";
	}
}
	

  


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   