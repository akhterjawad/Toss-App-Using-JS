let h2 = document.querySelector('h2')

function calculated() {
    if (Math.floor(Math.random() * 2)) {
        console.log('win');
h2.innerHTML= 'you win'
    } else {
        console.log('lose');
        h2.innerHTML= 'you lose'

    }
}