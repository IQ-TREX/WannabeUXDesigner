document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll("#menu li");
    menuItems.forEach(function (menuItem) {
        var submenu = menuItem.querySelector(".submenu");
        if (submenu) {
            menuItem.addEventListener("mouseenter", function () {
                submenu.classList.add("submenu-visible");
            });
            menuItem.addEventListener("mouseleave", function () {
                submenu.classList.remove("submenu-visible");
            });
        }
    });
});
