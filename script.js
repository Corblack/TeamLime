// --- INTERSECTION OBSERVER (Animation au scroll) ---
// Détecte quand un élément ".hidden" entre dans l'écran
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 }); // Se déclenche quand 10% de l'objet est visible

// On applique l'observateur à tous les éléments cachés
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));


// --- FOOTER DATE AUTO ---
// Met à jour l'année automatiquement
document.getElementById('year').textContent = new Date().getFullYear();