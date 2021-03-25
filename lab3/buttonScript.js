var windw;
button1.onclick = function () {
    windw = window.open("https://lpnu.ua/", "NULP", "wight=500,height=400,scrollbars=no,location=no,toolbar=no");
}
button2.onclick = function () {
    windw.close();
}
button3.onclick = function () {
    windw.resizeTo(windw.innerWidth / 2, windw.innerheight / 2);
    page.focus();
}