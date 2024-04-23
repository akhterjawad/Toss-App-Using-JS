let h2 = document.querySelector('.h2')
let h22 = document.querySelector('.h22')

function calculated(tail) {
    if (Math.floor(Math.random() * 2)) {
        console.log('win');
        h2.innerHTML = 'you win'
        // return 'win'+ hed 
    } else {
        console.log('lose');
        h2.innerHTML = 'you lose'
        // return 'lose'+ tail 

    }
    // console.log(tail);
    if (tail === 'tail') {
        console.log('you choose tail');
        h22.innerHTML = 'you Choose Tail'

    } else {
        console.log('you choose head');
        h22.innerHTML = 'you choose Head'
    }
}