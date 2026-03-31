const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const heroInfoButton = document.getElementById('heroInfoButton');
const reserveInfoButton = document.getElementById('reserveInfoButton');
const galleryItems = document.querySelectorAll('.gallery-item');
const serviceButtons = document.querySelectorAll('.service-detail-btn');
const modal = document.getElementById('galleryModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const title = item.dataset.title;
    const description = item.dataset.description;
    openModal(title, description);
  });
});

serviceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openModal(button.dataset.title, button.dataset.description);
  });
});

heroInfoButton.addEventListener('click', () => {
  openModal(
    'Planifica tu evento',
    'Descubre nuestros paquetes para banquetes, cenas especiales y eventos temáticos. Haz clic en cualquiera de los servicios para ver más detalles.'
  );
});

reserveInfoButton?.addEventListener('click', () => {
  openModal(
    'Opciones de reservación',
    'Reserva mesas, banquetes o eventos privados. Contacta a nuestro equipo para recibir una propuesta personalizada y disponibilidad inmediata.'
  );
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

function openModal(title, description) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !phone || !message) {
    formFeedback.textContent = 'Por favor completa todos los campos antes de enviar.';
    return;
  }

  formFeedback.textContent = '¡Gracias! Recibimos tu mensaje y pronto nos pondremos en contacto.';
  contactForm.reset();
});
