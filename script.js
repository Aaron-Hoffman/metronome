const blinker = document.querySelector('.metronomeVisual');

const input = document.querySelector('input').value;

console.log(tempo);

setInterval(() => {
    blinker.style.backgroundColor = 'blue';
    setTimeout(() => {
        blinker.style.backgroundColor = 'green';
    }, 50)
}, 1000)

