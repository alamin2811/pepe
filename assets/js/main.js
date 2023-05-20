/*-----------------------------------------------------------------------------
Theme Name: Pepe
Author: uigigs
Author URL: https://themeforest.net/user/uigigs/portfolio
-----------------------------------------------------------------------------*/
(function ($) {
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

/*-- copy text js start --*/
var copyAddress = $(".wallet-address-section");
if (copyAddress.length) {
    function copyText() {
        // Get the text from the div element
        var text = document.getElementById("WalletAddress").innerText;
      
        // Create a temporary textarea element
        var textarea = document.createElement("textarea");
        textarea.value = text;
      
        // Append the textarea element to the document
        document.body.appendChild(textarea);
      
        // Select the text in the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the selected text to the clipboard
        document.execCommand("copy");
      
        // Remove the temporary textarea element
        document.body.removeChild(textarea);
      
        // Alert the user that the text has been copied
        alert("Text copied to clipboard: " + text);
      }
}
/*-- copy text js end --*/