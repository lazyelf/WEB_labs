function ready() {
    var sentence = navigator.language + "\n---------------------------------------------\n" + navigator.oscpu;
    alert(sentence);
    sentence = "Enter teg to search:\n";
    var teg = prompt(sentence);
    if (teg !== null) {
        var all = document.getElementsByTagName(teg);
        var num = all.length;
        if (num !== 0) {
            sentence = "There are " + num + " such tegs in this document\n";
            var i = 0;
            for (i = 0; i < num; ++i) {
                sentence += (i + 1).toString() + ". " + all[i].innerHTML + "\n";
            }
        } else {
            sentence = "No such tegs";
        }
        alert(sentence);
    }

    sentence = "Enter web page address\n";
    var address = prompt(sentence);
    if (address !== null) {
        sentence = "Do u want to leave current page?";
        var tf = confirm(sentence);
        if (tf == true) {
            var windw = window.open(address, "Visit");
        } else {
            location.reload();
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);