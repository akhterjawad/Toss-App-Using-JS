let h2 = document.querySelector('.h2')
let h22 = document.querySelector('.h22')

function calculated(tell) {
    if (Math.floor(Math.random() * 2)) {
        console.log('win');
        h2.innerHTML = 'you win'
        // return 'win'+ hed 
    } else {
        console.log('lose');
        h2.innerHTML = 'you lose'
        // return 'lose'+ tell 

    }
    // console.log(tell);
    if (tell === 'tell') {
        console.log('you choose tell');
        h22.innerHTML = 'you Choose Tell'

    } else {
        console.log('you choose head');
        h22.innerHTML = 'you choose Head'
    }
}