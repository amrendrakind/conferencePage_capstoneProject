const mobileMenu = document.querySelector('.mobile_menu_button');
const closeMenu = document.querySelector('#close-menu');

mobileMenu.addEventListener('click', () => {
  document.getElementById('toggle-menu').classList.toggle('toggle-menu');
  document.querySelector('html').style.overflowY = 'hidden';
});

closeMenu.addEventListener('click', () => {
  document.getElementById('toggle-menu').classList.toggle('toggle-menu');
  document.querySelector('html').style.overflowY = 'auto';
});