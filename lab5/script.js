/*В текстовий рядок вводиться послідовність пар чисел. 
При натисненні кнопки, перевіряється на парність кількість 
введених чисел та формується багатомірний масив, де перше 
число це рядок, другий стовпець. Значенням комірки буде 
номер пари чисел. Записаний багатомірний масив записати 
у наперед підготовлену таблицю.*/
var t_amount = 7;

function ready() {
    for (i = 0; i < t_amount; i++) {
        var elem = document.createElement("input");
        elem.setAttribute("type", "text");
        elem.setAttribute("value", i + 1);
        document.getElementById("div1").append(elem);
        document.getElementById("div1").innerHTML += '<br>';
    }
}

document.addEventListener("DOMContentLoaded", ready);

document.getElementById('text1').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        button1.onclick();
    }
});

document.getElementById('text2').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        button2.onclick();
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

function create_matrix(arr, cols) {
    var res = [];
    for (i = 0; i < arr.length; i = i + cols) {
        res.push(arr.slice(i, i + cols));
    }
    return res;
}

function find_max(data, i) {
    var max = 0;
    data.forEach(function (value) {
        max = Math.max(max, value[i]);
    });
    return max;
}

function is_avaible(arr, row, column) {
    var k;
    for (k = 0; k < arr.length; k++) {
        if (arr[k][0] == row && arr[k][1] == column) {
            return true;
        }
    }
    return false;
}

button1.onclick = function () {
    document.getElementById("table").innerHTML = ' ';
    var str = document.getElementById("text1").value,
        arr = str.split(","),
        amount = arr.length;
    if (amount % 2 === 1) {
        alert("Try again");
    } else {
        arr = create_matrix(arr, 2);

        var rows = find_max(arr, 0),
            cols = find_max(arr, 1),

            tr = document.createElement("tr"),
            td = document.createElement("td");
        td.textContent = 0;
        tr.append(td);

        for (var j = 0; j < cols; j++) {
            td = document.createElement("td");
            td.textContent = j + 1;
            tr.append(td);
        }

        var count = 0;
        document.getElementById("table").append(tr);
        for (var i = 0; i < rows; i++) {
            tr = document.createElement("tr");
            td = document.createElement("td");
            td.textContent = i + 1;
            tr.append(td);
            for (var j = 0; j < cols; j++) {
                td = document.createElement("td");
                if (is_avaible(arr, i + 1, j + 1)) {
                    count = count + 1;
                    td.textContent = count;
                } else {
                    td.textContent = '_';
                }
                tr.append(td);
            }
            document.getElementById("table").append(tr);
        }
    }
};


/*В текстовий рядок вводяться серія значень (чисел), 
розділених комою (значення можуть бути числові та рядкові). 
При натисканні на кнопку має виконуватись функція. 
Функція перетворює в масив введене в текстовий рядок 
значення та створює новий масив, який сформовано з введених 
елементів які більші за 10. Вивести новий масив в абзаці. 
Якщо новий масив містить 0 елементів – вивести напис 
«Таких елементів немає».*/

button2.onclick = function () {
    var new_arr = [],
        str = document.getElementById("text2").value,
        arr = str.split(","),
        amount = arr.length,
        count = 0;
    for (var i = 0; i < amount; i++) {
        if (arr[i] > 10) {
            new_arr[count] = arr[i];
            count = count + 1;
        }
    }

    if (count > 0) {
        document.getElementById("p1").innerHTML = new_arr;
    } else {
        document.getElementById("p1").innerHTML = "Such elements do not exist.";
    }
};

/*В текстовий рядок вводяться серія значень, 
розділених комою (значення можуть бути числові та рядкові). 
При натисканні на кнопку має виконуватись функція. Функція 
перетворює в масив введене в текстовий рядок значення та 
виводить у повідомленні типу alert середній елемент масиву. 
Якщо елемент є числом, вивести суму цифр.*/

function sum_digits(n) {
    var sum = 0;
    while (n > 0) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }
    return sum;
}

button3.onclick = function () {
    var sum1 = "not number",
        sum2 = "not number",
        str = document.getElementById("text3").value,
        arr = str.split(","),
        amount = arr.length;
    if (amount % 2 === 0) {
        if (Number.isInteger(parseInt(arr[(amount / 2) - 1]))) {
            sum1 = sum_digits(parseInt(arr[(amount / 2) - 1]));
        }
        if (Number.isInteger(parseInt(arr[amount / 2]))) {
            sum2 = sum_digits(parseInt(arr[amount / 2]));
        }
        alert("Pair: middle of array: " + arr[(amount / 2) - 1] + ', ' + arr[(amount / 2)] +
            "\nDigits sum of 1 number is: " + sum1 +
            "\nDigits sum of 2 number is: " + sum2);

    } else {
        if (Number.isInteger(parseInt(arr[(amount / 2) - 0.5]))) {
            sum1 = sum_digits(parseInt(arr[(amount / 2) - 0.5]));
        }
        alert("Odd: middle of array: " + arr[(amount / 2) - 0.5] +
            "\nDigits sum is: " + sum1);
    }

}

/*Створити функцію, яка буде виводити стовпчик зі 
значеннями від 1 до n (значення n вводиться в текстовому полі на формі).*/

button4.onclick = function () {
    var n = parseInt(document.getElementById("text4").value);
    document.getElementById("p2").innerHTML = ' ';
    var count = 1;
    while (n > 0) {
        document.getElementById("p2").innerHTML += count.toString() + '<br>';
        n = n - 1;
        count = count + 1;
    }
}

/*На сторінці знаходиться текстовий рядок та блок(div) з 7 текстових рядків. 
В текстовий рядок вводяться серія значень, розділених комою 
(значення можуть бути числові та рядкові). При натисканні на 
кнопку має виконуватись функція. Функція перетворює в масив 
введене в текстовий рядок, сортує, та поелементно, заносить 
у блок текстових рядків значення. Якщо кількість значень менша 
за кількість у масиві, зайві рядки затираються. Якщо кількість 
значень більша за кількість рядків у блоці, виводиться повідомлення 
про помилку у alert.*/

button5.onclick = function () {
    var str = document.getElementById("text5").value,
        arr = str.split(", "),
        arr_amount = arr.length;
    if (arr_amount > t_amount) {
        alert("Too many");
    } else {
        arr.sort();
        document.getElementById("div1").innerHTML = ' ';
        for (i = 0; i < arr_amount; i++) {
            var elem = document.createElement("input");
            elem.setAttribute("type", "text");
            elem.setAttribute("value", arr[i]);
            document.getElementById("div1").append(elem);
            document.getElementById("div1").innerHTML += '<br>';
        }
    }

}


function task17() {
    var num = document.getElementById('run9').value;
    for (var i = Number(num); i >= 0; --i) {
        document.getElementById("17").innerText += i.toString() + '<br>';
    }

}

function task25() {
    var string = document.getElementById('run15').value;
    var arr5 = string.split(',')
    var arr6 = []
    for (i = 0; i < arr5.length; i++) {
        if (Number(arr5[i]) != NaN) {
            arr6.push(Number(arr5[i]));
        }
    }
    var result = getRandomArbitraryABC();
    arr6 = arr6.filter(function (e) {
        return e
    });
    if (result == 0) {
        arr6.sort()

    } else {
        arr6.sort();
        arr6.reverse()
    }

    alert(arr6);
}