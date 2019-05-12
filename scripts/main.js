var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

var myVariable = document.querySelector('h1');
alert('hello!');

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/premier_league.png') {
      myImage.setAttribute ('src','images/premier_league.png');
    } else {
      myImage.setAttribute ('src','images/premier_league.png');
    }
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

	function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
	}
if(!localStorage.getItem('name')) {
  setUserName();

} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
}