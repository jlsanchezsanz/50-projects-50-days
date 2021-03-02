const ratingsContainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const send = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
  const el = e.target;

  if (el.parentNode.classList.contains('rating')) {
    removeActive();
    el.parentNode.classList.add('active');
    selectedRating = el.nextElementSibling.innerHTML;
  }
});

send.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
})

function removeActive() {
  ratings.forEach(rating => rating.classList.remove('active'));
}