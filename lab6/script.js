function validateEmail(email) {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}

function validateHex(str) {
    var re = /^0([x, X])+[0-9, A-F, a-f]*$/;
    return re.test(str);
}

document.getElementById('text1').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        button1.onclick();
    }
});

document.getElementById('text1').addEventListener('keyup', function (event) {
    var str = document.getElementById("text1").value
    if (validateEmail(str) === true) {
        //document.getElementById("text1").style.color = 'green';
        document.getElementById("text1").style.background = 'green';
    } else {
        //document.getElementById("text1").style.color = 'red';
        document.getElementById("text1").style.background = 'red';
    }
});

document.getElementById('text2').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        button2.onclick();
    }
});

document.getElementById('text2').addEventListener('keyup', function (event) {
    var str = document.getElementById("text2").value
    if (validateHex(str) === true) {
        //document.getElementById("text1").style.color = 'green';
        document.getElementById("text2").style.background = 'green';
    } else {
        //document.getElementById("text1").style.color = 'red';
        document.getElementById("text2").style.background = 'red';
    }
});

document.getElementById('text3').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        button3.onclick();
    }
});

document.getElementById('text4').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        button4.onclick();
    }
});

document.getElementById('text5').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        button5.onclick();
    }
});


button1.onclick = function () {
    var str = document.getElementById("text1").value
    if (validateEmail(str) === true) {
        document.getElementById("p1").innerHTML = 'Email is correct';
    } else {
        document.getElementById("p1").innerHTML = 'Email is not correct';
    }
};

button2.onclick = function () {
    var str = document.getElementById("text2").value
    if (validateHex(str) === true) {
        document.getElementById("p2").innerHTML = 'Number is correct';
    } else {
        document.getElementById("p2").innerHTML = 'Number is not correct';
    }
};

button3.onclick = function () {
    var str = document.getElementById("text3").value
    document.getElementById("p3").innerHTML = str.replace(/a\\\\\\a/, '!');
};

button4.onclick = function () {
    var str = document.getElementById("text4").value
    document.getElementById("p4").innerHTML = '';
    var arr = str.match(/a[0-9]*a/g);
    for (var i = 0; i < arr.length; i++) {
        document.getElementById("p4").innerHTML += arr[i] + '<br>';
    }
}

button5.onclick = function () {
    var str = document.getElementById("text5").value
    document.getElementById("p5").innerHTML = '';
    var arr = str.match(/a[0-9]a/g);
    for (var i = 0; i < arr.length; i++) {
        document.getElementById("p5").innerHTML += arr[i] + '<br>';
    }
}