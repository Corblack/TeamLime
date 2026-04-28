// --- INTERSECTION OBSERVER ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 }); 


document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));



const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// --- BURGER MENU ---
const burgerMenu = document.getElementById('burger-menu');
const sideNav = document.getElementById('side-nav');
const navLinks = document.querySelectorAll('.nav-link');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    sideNav.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        sideNav.classList.remove('active');
    });
});

// --- WIKI MODAL LOGIC (Characters & Maps) ---
const cards = document.querySelectorAll('.character-card, .map-card');
const modal = document.getElementById('character-modal');

if (modal) { // Only run this code if the modal exists on the page
    const closeModalBtn = document.getElementById('modal-close-btn');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();

            const name = card.dataset.name;
            const img = card.dataset.img;
            const lore = card.dataset.lore;

            // Ajoute une classe spéciale si c'est une map
            if (card.classList.contains('map-card')) {
                modal.classList.add('map-modal');
            } else {
                modal.classList.remove('map-modal');
            }

            const modalBody = modal.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="modal-character-img-container">
                    <img src="${img}" alt="${name}" class="modal-character-img">
                </div>
                <div class="modal-character-details">
                    <h3>${name}</h3>
                    <p>${lore}</p>
                </div>
            `;

            modal.classList.add('visible');
            document.body.classList.add('modal-open');
        });
    });

    const closeModal = () => {
        modal.classList.remove('visible');
        document.body.classList.remove('modal-open');
    };

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
}