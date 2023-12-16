function expandCard(event) {
  const card = event.target.closest('.card');
  card.classList.toggle('expanded');
}
const cards = document.querySelectorAll('.card');

