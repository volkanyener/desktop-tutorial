let myImage = document.querySelector('img');

myImage .onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/volkan1.jpg') {
      myImage.setAttribute ('src','images/sellandme.jpg');
    } else {
      myImage.setAttribute ('src','images/volkan1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi fellow student! ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }