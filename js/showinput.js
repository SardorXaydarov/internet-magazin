var a;
function pass() {
    if (a == 1) {
        document.getElementById('parol').type = 'password';
        document.getElementById('pass-icon').src = '../images/icons/notshow.svg';
        a = 0;
    }
    else {
        document.getElementById('parol').type = 'text';
        document.getElementById('pass-icon').src = '../images/icons/show.svg';
        a = 1;
    }
}

var a;
function passtwo() {
    if (a == 1) {
        document.getElementById('parol-two').type = 'password';
        document.getElementById('pass-icon-two').src = '../images/icons/notshow.svg';
        a = 0;
    }
    else {
        document.getElementById('parol-two').type = 'text';
        document.getElementById('pass-icon-two').src = '../images/icons/show.svg';
        a = 1;
    }
}


var a;
function passthree() {
    if (a == 1) {
        document.getElementById('parol-three').type = 'password';
        document.getElementById('pass-icon-three').src = '../images/icons/notshow.svg';
        a = 0;
    }
    else {
        document.getElementById('parol-three').type = 'text';
        document.getElementById('pass-icon-three').src = '../images/icons/show.svg';
        a = 1;
    }
}



const minus = document.querySelector('.minus'),
    number = document.querySelector('.num'),
    plus = document.querySelector('.plus');

let b = 1;
plus.addEventListener('click', () => {
    b++;
    number.innerText = b;
})
minus.addEventListener('click', () => {
    if (b >= 2) {
        b--;
        number.innerText = b;
    }
})

const minusTwo = document.querySelector('.minus-two'),
    numberTwo = document.querySelector('.num-two'),
    plusTwo = document.querySelector('.plus-two');

let c = 1;
plusTwo.addEventListener('click', () => {
    c++;
    numberTwo.innerText = c;
})
minusTwo.addEventListener('click', () => {
    if (c >= 2) {
        c--;
        numberTwo.innerText = c;
    }
})


const minusThree = document.querySelector('.minus-three'),
    numberThree = document.querySelector('.num-three'),
    plusThree = document.querySelector('.plus-three');

let d = 1;
plusThree.addEventListener('click', () => {
    d++;
    numberThree.innerText = d;
})
minusThree.addEventListener('click', () => {
    if (d >= 2) {
        d--;
        numberThree.innerText = d;
    }
})


const minusFour = document.querySelector('.minus-four'),
    numberFour = document.querySelector('.num-four'),
    plusFour = document.querySelector('.plus-four');

let e = 1;
plusFour.addEventListener('click', () => {
    e++;
    numberFour.innerText = e;
})
minusFour.addEventListener('click', () => {
    if (e >= 2) {
        e--;
        numberFour.innerText = e;
    }
})



const minusFive = document.querySelector('.minus-five'),
    numberFive = document.querySelector('.num-five'),
    plusFive = document.querySelector('.plus-five');

let f = 1;
plusFive.addEventListener('click', () => {
    f++;
    numberFive.innerText = f;
})
minusFive.addEventListener('click', () => {
    if (f >= 2) {
        f--;
        numberFive.innerText = f;
    }
})


const minusSex = document.querySelector('.minus-sex'),
    numberSex = document.querySelector('.num-sex'),
    plusSex = document.querySelector('.plus-sex');

let g = 1;
plusSex.addEventListener('click', () => {
    g++;
    numberSex.innerText = g;
})
minusSex.addEventListener('click', () => {
    if (g >= 2) {
        g--;
        numberSex.innerText = g;
    }
})

const minusSeven = document.querySelector('.minus-seven'),
    numberSeven = document.querySelector('.num-seven'),
    plusSeven = document.querySelector('.plus-seven');

let h = 1;
plusSeven.addEventListener('click', () => {
    h++;
    numberSeven.innerText = h;
})
minusSeven.addEventListener('click', () => {
    if (h >= 2) {
        h--;
        numberSeven.innerText = h;
    }
})

const minusEight = document.querySelector('.minus-eight'),
    numberEight = document.querySelector('.num-eight'),
    plusEight = document.querySelector('.plus-eight');

let i = 1;
plusEight.addEventListener('click', () => {
    i++;
    numberEight.innerText = i;
})
minusEight.addEventListener('click', () => {
    if (i >= 2) {
        i--;
        numberEight.innerText = i;
    }
})

const minusNine = document.querySelector('.minus-nine'),
    numberNine = document.querySelector('.num-nine'),
    plusNine = document.querySelector('.plus-nine');

let j = 1;
plusNine.addEventListener('click', () => {
    j++;
    numberNine.innerText = j;
})
minusNine.addEventListener('click', () => {
    if (j >= 2) {
        j--;
        numberNine.innerText = j;
    }
})

