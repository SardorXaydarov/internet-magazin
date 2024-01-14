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


const plus = document.querySelector(".plus"),
            minus = document.querySelector(".minus"),
            num = document.querySelector(".num");
        let a = 1;
        plus.addEventListener("click", () => {
            a++;
            num.innerText = a;
        })

        minus.addEventListener("click", () => {
            if (a >= 2) {
                a--;
                num.innerText = a;
            }
        })