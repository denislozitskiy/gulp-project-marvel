"use strict";
(function() {       
    let i = 0;
    let slider_btns = document.querySelectorAll(".slider_nav");
    const TIME = 10000;
    
    (function init() {
        slider_btns[i].checked = "checked";
  
        if (i < slider_btns.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(init, TIME)
    })();
})();