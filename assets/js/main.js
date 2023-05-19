/*-----------------------------------------------------------------------------
Theme Name: staco
Author: uigigs
Author URL: https://themeforest.net/user/uigigs/portfolio
-----------------------------------------------------------------------------*/
(function ($) {
    /*-- sticky header scripts start --*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 20) {
            $('.header-section').addClass("sticky");
        }
        else {
            $('.header-section').removeClass("sticky");
        }
    });
    /*-- sticky header scripts end --*/

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*-- Faq Js Start --*/
    var FAQ = $(".faq-content");
    if (FAQ.length) {
        let accHeading = document.querySelectorAll(".accordion");
        let accPanel = document.querySelectorAll(".accordion-panel");

        for (let i = 0; i < accHeading.length; i++) {
            // Execute whenever an accordion is clicked 
            accHeading[i].onclick = function () {
                if (this.nextElementSibling.style.maxHeight) {
                    hidePanels(); // Hide All open Panels 
                } else {
                    showPanel(this); // Show the panel
                }
            };
        };

        // Function to Show a Panel
        function showPanel(elem) {
            hidePanels();
            elem.classList.add("active");
            elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
        };

        // Function to Hide all shown Panels
        function hidePanels() {
            for (let i = 0; i < accPanel.length; i++) {
                accPanel[i].style.maxHeight = null;
                accHeading[i].classList.remove("active");
            }
        };
    }
    /*-- Faq Js End --*/

    new WOW().init();
})(jQuery);