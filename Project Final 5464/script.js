// Smooth scrolling to sections when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Smooth scroll to the target section
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust offset if necessary
                behavior: 'smooth'
            });
        });
    });
});

// Form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation checks
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

        // If validation passes, handle form submission
        handleSubmitForm(name, email, message);
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to handle form submission (you can customize this to suit your backend)
    function handleSubmitForm(name, email, message) {
        // Here you can add code to send the form data to a server or API
        // For now, we'll just log the form data to the console
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);

        alert('Form submitted successfully!');

        // Optionally, you can reset the form fields
        form.reset();
    }
});
.// Handle form submission
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    // For example, send the form data to your server or payment gateway
});

// Handle payment method selection
document.getElementById('payment-method').addEventListener('change', function(event) {
    const paymentDetails = document.getElementById('payment-details');
    const selectedMethod = event.target.value;
    
    // Clear existing payment method-specific inputs
    paymentDetails.innerHTML = '';
    
    if (selectedMethod === 'credit-card') {
        // Add credit card input fields
        paymentDetails.innerHTML = `
            <label for="card-number">Card Number:</label>
            <input type="text" id="card-number" name="card-number" required>

            <label for="expiry-date">Expiry Date:</label>
            <input type="month" id="expiry-date" name="expiry-date" required>

            <label for="cvv">CVV:</label>
            <input type="number" id="cvv" name="cvv" min="100" max="999" required>
        `;
    } else if (selectedMethod === 'paypal') {
        // Add PayPal input fields (if any)
        paymentDetails.innerHTML = '<p>Proceed to PayPal payment.</p>';
    }
    // Add handling for other payment methods as needed
});
