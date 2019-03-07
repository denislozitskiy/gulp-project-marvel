"use strict";
(function() {
    //=============SHOW/HIDE MOBILE MENU
    document.querySelector(".btn-showmenu").addEventListener("click", function() {
        document.querySelector(".closed-menu").classList.toggle("opened-menu");
    });

    //=============MENU SMOOTH SCROLL
    Array.from(document.querySelectorAll(".container_menu ul a")).forEach(function(item) {
        item.addEventListener("click", function(evt) {
            let href = item.getAttribute("href");

            evt.preventDefault();
            document.querySelector("." + href).scrollIntoView({behavior: 'smooth', block: "start"});
        })
    });
    
    //=============SHOW MORE FEATURE ITEMS
    document.querySelector(".btn-feature").addEventListener("click", function () { 
   	    this.style.display = "none";
   	    Array.from(document.querySelectorAll(".item_feature:nth-child(even)")).forEach(function(item) {
            item.style.display = "flex";
        })
    });
    //=============SHOW/HIDE MAP
    document.querySelector(".map_button").addEventListener("click", function() { 
        document.querySelector("#map").classList.toggle("opened-map");
    });  
})();