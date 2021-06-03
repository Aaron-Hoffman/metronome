const blinker = document.querySelector('.metronomeVisual');
const input = document.querySelector('input'); 
const button = document.querySelector('#start');
let isOn = false;
let milliseconds = 60000 / 120;
let currentInterval;
const click = new Audio('click.wav');
click.play();

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

input.addEventListener('change', () => {
    const tempo = input.value;
    milliseconds = 60000 / tempo;

    clearInterval(currentInterval);
    
    if (isOn) {
        runMetronome(milliseconds);
    }
});

const runMetronome = (time) => {
    currentInterval = setInterval(() => {
        // blinker.style.backgroundColor = 'blue';
        console.log('click');
        // setTimeout(() => {
        //     blinker.style.backgroundColor = 'green';
        // }, 20)
    }, time)
}



