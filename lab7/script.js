document.getElementById('text1').addEventListener('keyup', function (event) {
    document.getElementById('txt_width').innerHTML = document.getElementById('text1').value;
    button12.onclick();

});

document.getElementById('text1').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        button11.onclick();
        button12.onclick();
    }
});

button11.onclick = function () {
    var str = document.getElementById('text1').value;
    document.getElementById('text1').value = str.replace(/@/g, '!');
    document.getElementById('txt_width').innerHTML = document.getElementById('text1').value;
};

button12.onclick = function () {
    document.getElementById('text1').style.width = (document.getElementById('txt_width').clientWidth.toString()) + 'px';
};

button2.onclick = function () {

    var date = new Date;
    var day = date.getDate();
    var mounth = date.getMonth();
    var year = date.getFullYear();

    formatTime.innerHTML = year;
    formatTime.innerHTML += "-";


    if (mounth < 10) {
        formatTime.innerHTML += '0' + (mounth + 1);
    } else {
        formatTime.innerHTML += (mounth + 1);
    }
    formatTime.innerHTML += "-";


    if (day < 10) {
        formatTime.innerHTML += '0' + day;
    } else {
        formatTime.innerHTML += day;
    }

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    formatTime.innerHTML += '<br>';
    if (hours < 10) {
        formatTime.innerHTML += '0' + hours;
    } else {
        formatTime.innerHTML += hours;
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
}

button3.onclick = function () {
    var num1 = document.getElementById('text31').value;
    var num2 = document.getElementById('text32').value;
    document.getElementById('p3').innerHTML = Math.floor(num1 / num2);
    if (num1 % num2 !== 0) {
        document.getElementById('text33').value = num1 % num2;
        document.getElementById('text33').style.display = 'inline';
    } else {
        document.getElementById('text33').style.display = 'none';
    }
}

function f() {
    document.getElementById('text33').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', f);