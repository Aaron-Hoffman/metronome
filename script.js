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
        blinker.style.backgroundColor = 'blue';
        click.play();
        setTimeout(() => {
            blinker.style.backgroundColor = 'green';
        }, 20)
    }, time)
}



