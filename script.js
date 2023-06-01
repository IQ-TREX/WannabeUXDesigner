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

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.plus-sign-one, .plus-sign-two, .plus-sign-three, .plus-sign-four, .plus-sign-five');
    elements.forEach (function(element){
    element.addEventListener('click', function() {
      this.classList.toggle('rotate');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.small-button, .medium-button, .large-button');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('clicked');
          });
        this.classList.add('clicked');
      });
    });
  });

