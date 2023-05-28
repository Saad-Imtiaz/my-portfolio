function expandCard(event) {
  const card = event.target.closest('.card');
  card.classList.toggle('expanded');
}
