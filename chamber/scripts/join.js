const openButtons = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('.close');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    modal.style.display = 'flex';
    modal.querySelector('.close').focus();
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

// Close modal with ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
  }
});

const params = new URLSearchParams(window.location.search);

    document.getElementById("first").textContent = params.get("first");
    document.getElementById("last").textContent = params.get("last");
    document.getElementById("email").textContent = params.get("email");
    document.getElementById("phone").textContent = params.get("phone");
    document.getElementById("organization").textContent = params.get("organization");
    document.getElementById("timestamp").textContent = params.get("timestamp");