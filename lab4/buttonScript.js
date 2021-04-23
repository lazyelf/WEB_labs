var timerId;
var countdown;
var flag = false;
var x = document.getElementsByTagName("HTML")[0];

function loadTimer() {
    x.style.backgroundImage = "linear-gradient(180deg, rgba(255, 0, 255, 0.5), rgba(255, 0, 255, 0.5)), url(http://html-pedia.narod.ru/background/night-sky/night-sky-2.gif)";
}

function ready() {
    var loadBackImg = setTimeout(loadTimer, 3000);
}

document.addEventListener("DOMContentLoaded", ready);

button1.onclick = function () {
    if (flag == false) {
        timerId = setInterval(function () {
            numberP.textContent = Number(numberP.textContent) + 1;
        }, 1000)
        flag = true;
    }
}

button2.onclick = function () {
    flag = false;
    clearInterval(timerId);
}

button3.onclick = function () {
    numberP.textContent = '0';
}

button4.onclick = function () {
    countdown = setInterval(function () {
        var now = new Date().getTime();

        var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((now % (1000 * 60)) / 1000);

        if (hours < 10) {
            formatTime.innerHTML = '0' + hours;
        } else {
            formatTime.innerHTML = hours;
        }
        formatTime.innerHTML += ":";
        if (minutes < 10) {
            formatTime.innerHTML += '0' + minutes;
        } else {
            formatTime.innerHTML += minutes;
        }
        formatTime.innerHTML += ":";
        if (seconds < 10) {
            formatTime.innerHTML += '0' + seconds;
        } else {
            formatTime.innerHTML += seconds;
        }
    }, 1000)
    button4.setAttribute('disabled', true);
    button4.value = 'Not active';
    button5.removeAttribute('disabled');
    button5.value = 'Active';
}

button5.onclick = function () {
    clearInterval(countdown);
    formatTime.innerHTML = ' ';
    button5.setAttribute('disabled', true);
    button5.value = 'Not active';
    button4.removeAttribute('disabled');
    button4.value = 'Active';
}

function f()
{
    alert('Viktoriia');
    setTimeout(alert, 2000, 'CS-201');
}

button6.onclick = function () {
    alert('Mykhailova');
    setTimeout(f, 2000);
}

button7.onclick = function () {
    x.style.backgroundImage = "linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(http://html-pedia.narod.ru/background/night-sky/night-sky-2.gif)";
    ready();
}