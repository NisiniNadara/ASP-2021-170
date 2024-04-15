document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 80, 
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            alert('Name is required');
            return;
        }

        if (email === '') {
            alert('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (message === '') {
            alert('Message is required');
            return;
        }

        handleSubmitForm(name, email, message);
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function handleSubmitForm(name, email, message) {

        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);

        alert('Form submitted successfully!');

        form.reset();
    }
});
.
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.getElementById('payment-method').addEventListener('change', function(event) {
    const paymentDetails = document.getElementById('payment-details');
    const selectedMethod = event.target.value;
   
    paymentDetails.innerHTML = '';
    
    if (selectedMethod === 'credit-card') {
        paymentDetails.innerHTML = `
            <label for="card-number">Card Number:</label>
            <input type="text" id="card-number" name="card-number" required>

            <label for="expiry-date">Expiry Date:</label>
            <input type="month" id="expiry-date" name="expiry-date" required>

            <label for="cvv">CVV:</label>
            <input type="number" id="cvv" name="cvv" min="100" max="999" required>
        `;
    } else if (selectedMethod === 'paypal') {
        paymentDetails.innerHTML = '<p>Proceed to PayPal payment.</p>';
    }
});
