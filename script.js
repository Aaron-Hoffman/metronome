const blinker = document.querySelector('.metronomeVisual');

const input = document.querySelector('input'); 

let tempo = 0;
input.addEventListener('change', () => {
    tempo = input.value;
    setInterval(() => {
        blinker.style.backgroundColor = 'blue';
        setTimeout(() => {
            blinker.style.backgroundColor = 'green';
        }, 50)
    }, tempo)
});



