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


// Sigin Page
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Pop Up for appoinment page 

document.addEventListener('DOMContentLoaded', function() {

    // Get the form element
    const appointmentForm = document.getElementById('appointmentForm');

    // Listen for the form submission
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Logic for displaying the popup
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';

        // Set user info
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        popup.querySelector('.name').innerText = name;
        popup.querySelector('.email').innerText = email;

        // Logic for blurring the background
        document.body.classList.add('blur');

        // Logic for sending email confirmation (to be implemented)
    });

    // Close button event
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', function() {
        // Logic for hiding the popup
        const popup = document.getElementById('popup');
        popup.style.display = 'none';

        // Logic for un-blurring the background
        document.body.classList.remove('blur');
    });

});


// Pop Up for contact page
function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
