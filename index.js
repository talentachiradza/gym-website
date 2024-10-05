document.addEventListener("DOMContentLoaded", () => {
    const joinForm = document.getElementById("joinForm");
    
    if (joinForm) {
        joinForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const membership = document.getElementById("membership").value;

            // For demonstration, you can log the information to the console
            console.log("Form submitted:", { name, email, phone, membership });

            // Show a thank you message
            alert(`Thank you for joining, ${name}!`);
        });
    }
});

  const burger = document.getElementById('burger');
        const navLinks = document.getElementById('nav-links');

        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.querySelector('i').classList.toggle('fa-times');
        });