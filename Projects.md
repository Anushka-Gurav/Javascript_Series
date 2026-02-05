# Project related to Dom


## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

``` javascript 

const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```
Javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please give valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    
  }
});

```

## Project 3

``` Javascript

const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString);

setInterval(function () {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4 

``` Javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game over , Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess == randomNumber) {
    displayMsg('You Guessed right :)');
    endGame();
  } else if (guess < randomNumber) {
    displayMsg('No is toooo low');
  } else if (guess > randomNumber) {
    displayMsg('No is tooo high');
  }
}

function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMsg(message) {
  //
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  //
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    let randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
function endGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

```


## Project 5

``` Javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>Germany</td>
  </tr>
 
</table>
  </div>
  `;
});

```



## Project 6

``` Javascript 
//generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

const StartChangingColor = function () {
  if (intervalID) return;
  intervalID = setInterval(changeBgColor, 2000);
  function changeBgColor() {
    document.body.style.background = randomColor();
  }
};

const stopChangingColor = function () {
  let cl = clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', StartChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```