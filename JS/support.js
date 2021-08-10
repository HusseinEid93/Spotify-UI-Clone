const showcaseCloseIcon = document.querySelector('.showcase__icon--close');
const showcaseInput = document.querySelector('.showcase__input');
const listsHeaders = document.querySelectorAll('.lists__list-header');

showcaseInput.addEventListener('input', () => {
   const value = showcaseInput.value;
   if (value)
      showcaseCloseIcon.classList.add('active');
   else
      showcaseCloseIcon.classList.remove('active');
});

showcaseCloseIcon.addEventListener('click', () => {
   showcaseInput.value = '';
   showcaseCloseIcon.classList.remove('active');
});


listsHeaders.forEach(header => header.addEventListener('click', () => {
   header.lastElementChild.classList.toggle('active');
}));