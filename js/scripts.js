/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function toggleDropdown(dropdownId, iconId) {
    var content = document.getElementById(dropdownId);
    var icon = document.getElementById(iconId);

    if (content.style.display === "flex") {
        content.style.display = "none";
        icon.classList.remove("rotate");
    } else {
        content.style.display = "flex";
        content.style.flexDirection = "column"; // 讓子選單垂直排列
        icon.classList.add("rotate");
    }
}




const magnifier = document.querySelector(".magnifier-container");
const img = document.getElementById("magnifier-image");

magnifier.addEventListener("mousemove", function (e) {
    const rect = magnifier.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.5)"; // 放大 2 倍
});

magnifier.addEventListener("mouseleave", function () {
    img.style.transform = "scale(1)";
});