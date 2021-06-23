//  Select elements needed 
const blinker = document.querySelector('.metronomeVisual');
const button = document.querySelector('#start');
const input = document.querySelector('input'); 
//  Set input value to 120 to match default tempo variable
input.value = 120;
//  Initialize global variables
let isOn = false;
let milliseconds = 60000 / 120;
let currentInterval;
const click = new Audio('shortClick.wav');


//  Start Stop Button 
button.addEventListener('click', () => {
    if (button.textContent === "Start") {
        button.textContent = "Stop";
        isOn = true;
        runMetronome(milliseconds);
    } else {
        button.textContent = "Start"
        isOn = false;
        clearInterval(currentInterval);
    }
})

//  Listen for change in the tempo input, calculate milliseconds and set the metronome interval
input.addEventListener('change', () => {
    const tempo = input.value;
    milliseconds = 60000 / tempo;

    clearInterval(currentInterval);
    
    if (isOn) {
        runMetronome(milliseconds);
    }
});

// Sets interval to do something based on the user's BPM selection  
const runMetronome = (time) => {
    currentInterval = setInterval(() => {
        blinker.style.backgroundColor = 'black';
        click.play();
        setTimeout(() => {
            blinker.style.backgroundColor = 'white';
        }, 20)
    }, time)
}

//  Different Rhythms
const rhythms = document.querySelector('.rhythms');
const half = document.querySelector('#half');
const quarter = document.querySelector('#quarter');
const eigth = document.querySelector('#eigth');
const sixteenth = document.querySelector('#sixteenth');

rhythms.addEventListener('click', (e) => {

    document.querySelector('.activeRhythm').classList.remove('activeRhythm');
    e.target.classList.add('activeRhythm');

    const divisor = e.target.value;
    const tempo = input.value;
    milliseconds = 60000 / tempo / divisor;
    clearInterval(currentInterval);
    if (isOn) {
        runMetronome(milliseconds);
    }
})






