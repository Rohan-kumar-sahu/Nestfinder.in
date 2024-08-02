document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message. We will get back to you shortly.');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navToggle.classList.toggle('active');
});
