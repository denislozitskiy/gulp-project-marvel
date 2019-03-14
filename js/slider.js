"use strict";
(function() {       
    let i = 0;
    let slider_btns = document.querySelectorAll(".slider_nav");
    const TIME = 10000;
    
    (function init() { // Function will start autamaticly || Функция запустится автоматически
        slider_btns[i].checked = "checked";
        (i < slider_btns.length - 1) ? i++ : i = 0; // slider_btns.length = 3

        setTimeout(init, TIME) // Loops the function || Зацикливает функцию
    })();
})();