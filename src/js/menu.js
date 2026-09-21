// Function to initialize the mobile sidebar menu logic
export function initMenu() {
  const burgerBtn = document.getElementById('burgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // Ensure all elements exist on the page before adding event listeners
  if (burgerBtn && closeMenuBtn && mobileMenu) {
    // Open sidebar menu on burger click
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.add('mobile-menu--open');
      mobileMenu.setAttribute('aria-hidden', 'false');
    });

    // Close sidebar menu on close button click
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu--open');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  }
}
