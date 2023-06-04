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
// JavaScript code
function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

//Pop Up for Order Confirmation
function openConfirmPopup() {
    popup.classList.add("open-popup");
  }
  function closeConfirmPopup() {
    popup.classList.remove("open-popup");
  }

  //Parallax effect for Styling Tips page
const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});
