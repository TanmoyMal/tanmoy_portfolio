// Initialize Typed.js for typing effect

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Python Developer'],
    typeSpeed: 60,
    loop: true
});




// Function to toggle the navigation menu

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const openIcon = document.getElementById('open-icon');
    const closeIcon = document.getElementById('close-icon');

    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        const openIcon = document.getElementById('open-icon');
        const closeIcon = document.getElementById('close-icon');

        // Close the menu only if it's active (mobile open)
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});





// Function to scroll to the top of the page

function scrollToTop() {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
}


// script.js (file ke end me)

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("entry.2005620554", form.name.value);
        formData.append("entry.1045781291", form.email.value);
        formData.append("entry.839337160", form.message.value);

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSfopzwvnYPgRa6qyZZEphgjIxMKlV_q0JTPftVhZNgQBkib7w/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formData,
        })
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((err) => {
                console.error("Form submit error:", err);
                alert("Something went wrong!");
            });
    });
});




//  By default 6 Certificate 

const showMoreBtn = document.getElementById('showMoreBtn');
const certBoxes = document.querySelectorAll('.cert-info');
let isExpanded = false;

showMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    certBoxes.forEach((box, index) => {
        if (index >= 6) {
            box.style.display = isExpanded ? 'flex' : 'none';
        }
    });
    showMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
});




// Certificate click to pop up

const certImages = document.querySelectorAll('.cert-img img');
const popup = document.getElementById('certPopup');
const popupImg = document.getElementById('popupImg');
const closeBtn = document.querySelector('.close-btn');

// Show popup on image click
certImages.forEach(img => {
    img.addEventListener('click', () => {
        popupImg.src = img.src;
        popup.style.display = 'flex';
    });
});

// Close popup on close button or background click
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

