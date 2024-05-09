let h2 = document.querySelector('.h2')
let h2_second = document.querySelector('.h2_second')

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
        h2_second.innerHTML = 'you Choose Tail'

    } else {
        console.log('you choose head');
        h2_second.innerHTML = 'you choose Head'
    }
}