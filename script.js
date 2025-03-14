// Gestion de la soumission du formulaire de contact
document.getElementById('form-contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    // Récupère les valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Affiche les valeurs dans la console (pour l'exemple)
    console.log('Nom:', nom);
    console.log('Email:', email);
    console.log('Message:', message);

    // Affiche un message de succès
    alert('Merci pour votre message, ' + nom + '! Nous vous répondrons bientôt.');

    // Réinitialise le formulaire
    document.getElementById('form-contact').reset();
});

// Animation au défilement des sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});