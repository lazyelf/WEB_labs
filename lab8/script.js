document.getElementById('input').addEventListener('keydown', function (e) {
    document.getElementById("punct").innerHTML = "Last entered code: " + e.keyCode;
});

document.getElementById("radioButtons").addEventListener('change', function () {
    var rad = document.getElementsByName('radio'),
        i,
        str;
    for (i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            //str = 'Selected ' + (i + 1) + ' radiobutton';
            str = 'Selected: ' + rad[i].value;
            document.getElementById("radioResult").value = str;
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var i, 
        radioamount = 5,
        rad = document.getElementsByName('radio');
    for (i = 0; i < radioamount + 1; i++) {
        document.getElementById(i.toString()).innerHTML = rad[i].value;
    }
});