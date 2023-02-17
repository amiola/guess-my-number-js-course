'use strict';

//Like in CSS, in JavaScript we can select elements from classes and ids.

//This is an easy way of selectong an element in JavaScript:
//console.log(document.querySelector('.message'));
/*This querySelector is basically a method that's available on the document object. Into this, we have to pass a selector, the same selector that we would use in CSS. */

//We can select the text on it. All we have to do is put another dot and then textContent property:
//console.log(document.querySelector('.message').textContent);

//  ----------- WHAT IS DOM & DOM MANIPULATION?
//DOM is a connection point between HTML documents and JS code.
//Make JS interact with web pages.

//  ----------- SELECTING AND MANIPULATING ELEMENTS

//we can set the content of the element.
//document.querySelector('.message').textContent = 'Correct number! 🎉';

//We see Start guessing as the text content on the console because it's before we change the content. To see the new content:
//console.log(document.querySelector('.message').textContent);

//console.log(document.querySelector('.number').textContent);
//document.querySelector('.number').textContent = 13;

//with an input field, to get an actual value we use the value property.
//console.log(document.querySelector('.guess').value);
//we get a space because now it's empty.

//we also can use it to set a value (manipulate an element):
//document.querySelector('.guess').value = 15;

//  ----------- HANDLING CLICK EVENTS
//we need to use an event listener. An event is something that happens on a page, for example, a mouse click,a  mouse moving or a key press, or many other events. Then, whith an event listener we can wait for a certain event to happen, and then react to it.

//In order to listen for events, we first need to select the element where the event should happen (in this case, the check button).
/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //first, we take the value from the box. When we complete the box and click the check button, the value will be assigned to the variable guess. We will get a string from the input. If we want to get a number, we have to convert it with the function Number.
  //console.log(typeof guess);

  //we need to check that the value is actually a value
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
}); 
*/
/*we have 2 classes: btn and check (separated by spaces). We choose check.

With that element, we can call the addEventListener method.

We first need to pass in the type of the event (in this case is a simple click). Next, we need to specify the reaction (what to do) to the click event. And we do that by defining a function, and that function will contain exactly the code that shoul be executed whenever this click event happens on this check button. And that function will be called the event handler.

So, the addEventListener takes a value and a function as arguments. Remember that a function is also a value.*/

//  ------------------  MANIPULATING CSS STYLES
//CHANGING THE BACKGROUND:
//We need to select the body element, then style property, and then the property that we want to change
//document.querySelector('body').style.backgroundColor = '#60b347';

//  ------------- IMPLEMENTING THE GAME LOGIC

//DEFINING SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1; //the random method will throw a random value between 0 and 1. If we want it to be between 1 and 20, we multiply it by 20, truncate it (to eliminate the decimals) and add 1 (because it would be between 0 and 19).
console.log(secretNumber);

//DEFINING INITIAL SCORE:
let score = 20;
let highScore = 0;

//FUNCTION TO CLEAN THE CODE:

const changeMessage = function (m) {
  document.querySelector('.message').textContent = m;
};

const changeNumber = function (m) {
  document.querySelector('.number').textContent = m;
};

//all the same with the rest

//APPLYING GAME LOGIC
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    changeMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    changeMessage('🎉 Correct! You win!');
    changeNumber(secretNumber);

    //HIGHSCORES:
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //CHANGING STYLES:
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '250px'; //we always need to specify a string, not just a number (number + unit)
  } else if (guess !== secretNumber) {
    changeMessage(guess > secretNumber ? 'Too high...' : 'Too low...');
    score--;
  }
  document.querySelector('.score').textContent = score;

  //SCORE REACHES 0: GAME OVER!
  if (!score) {
    changeMessage('💥GAME OVER!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  changeNumber('?');
  document.querySelector('.guess').value = '';
  changeMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
