const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game

recognition.start();

// Capture user speak
function onSpeak() {
    const msg = e.results[0][0].transcript;

   // writeMessage(msg);
   // checkNumber(msg);
}

// Write what user speaks

function writeMessage(msg) {
    msgEl.innerHTML = `
    <div> You said :</div>
    <span class="box"> ${msg} </span>
    `;
}

// Check msg against number

function checkNumber(msg){
    const num = +msg;

    if(Number.isNaN(num)){
      msgEl.innerHTML += '<div>That is not a valid number</div>';  
      return;
    }

    if(nem > 100 || num < 1){
        msgEl.innerHTML += '<div> Number must be between 1 and 100</div>';
    return;
    }

    if(num === randomNum) {
        document.body.innerHTML = `
         <h2> Congrats! You have guessed the number! <br><br>
         It was ${num} </h2>
         <button class="play-again" id="play-again"> Play Again </button>
        `;
    } else if(number > randomNum) {
        msgEl.innerHTML = '<div>Go LOWER</div>';
    } else {
        msgEl.innerHTML = '<div>Go HIGHER</div>'
    }
}

// Generate random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) +1;
}

// Speak result
recognition.addEventListener('result', onSpeak);


// End SR service

recognition.addEventListener('end', () => recognition.start());


document.body.addEventListener('click', (e) => {
    if(e.target.id == 'play-again'){
        window.location.reload();
    }
});