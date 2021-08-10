const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.navbar__toggle');
const overlay = document.getElementById('overlay');


toggleBtn.addEventListener('click', () => {
   navbar.classList.toggle('active');
   document.documentElement.classList.toggle('active');
   overlay.classList.toggle('active');
});


overlay.addEventListener('click', () => toggleBtn.click())