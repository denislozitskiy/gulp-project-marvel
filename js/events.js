"use strict";
(function() {
    //=============SHOW/HIDE MOBILE MENU || СПРЯТАТЬ/ПОКАЗАТЬ МОБИЛЬНОЕ МЕНЮ
    document.querySelector(".btn-showmenu").addEventListener("click", function() {
        document.querySelector(".closed-menu").classList.toggle("opened-menu");
    });

    //=============SMOOTH SCROLL OF MENU LINKS || ПЛАВНОЕ ПРОКРУЧИВАНИЕ ССЫЛОК МЕНЮ
    Array.from(document.querySelectorAll(".container_menu ul a")).forEach(function(item) {
        item.addEventListener("click", function(evt) {
            let href = item.getAttribute("href");

            evt.preventDefault();
            document.querySelector("." + href).scrollIntoView({behavior: 'smooth', block: "start"});
        })
    });
    
    //=============SHOW REMAINING FEATURE ITEMS || ПОКАЗЫВАЕТ ОСТАВШИЕСЯ FEATURE ПРЕДМЕТЫ
    document.querySelector(".btn-feature").addEventListener("click", function () { 
   	    this.style.display = "none"; // Hides btn-feature || Прячет btn-feature
   	    
   	    Array.from(document.querySelectorAll(".item_feature:nth-child(even)")).forEach(function(item) {
            item.style.display = "flex";
        })
    });
    //=============SHOW/HIDE MAP || СПРЯТАТЬ/ПОКАЗАТЬ МОБИЛЬНОЕ МЕНЮ
    document.querySelector(".map_button").addEventListener("click", function() { 
        document.querySelector("#map").classList.toggle("opened-map");
    });  
})();