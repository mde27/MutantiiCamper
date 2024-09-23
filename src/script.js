let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').addEventListener('click',
  (e) => {navbar.classList.toggle('active');});

window.onscroll = () => {
  navbar.classList.remove('active');
}