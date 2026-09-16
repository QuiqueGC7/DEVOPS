document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a, .hero-btns a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offset = 80; // Navbar height
                    const targetPosition = targetElement.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    // Initial check and scroll listener
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // 3. Contact Form Submission Simulation
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data (simulation)
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            
            // Visual feedback - loading state
            const submitBtn = contactForm.querySelector('button');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            // Simulate API call delay
            setTimeout(() => {
                // Success state
                contactForm.classList.add('hidden');
                
                formFeedback.innerHTML = `
                    <div style="text-align: center; padding: 2rem; background: #ecfdf5; border-radius: 12px; border: 1px solid #10b981;">
                        <h3 style="color: #065f46; margin-bottom: 0.5rem;">¡Mensaje enviado con éxito!</h3>
                        <p style="color: #065f46;">Gracias, ${name}. Nos pondremos en contacto contigo muy pronto.</p>
                        <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 1.5rem;">Enviar otro mensaje</button>
                    </div>
                `;
                formFeedback.classList.remove('hidden');
                
                // Reset (optional, here we reload or show success)
            }, 1500);
        });
    }

    // 4. Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '0';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });
});
