const modalOverlay = document.querySelector('.modal__overlay');
const cards = document.querySelectorAll('.card');
const menu_items = document.querySelectorAll('.menu_item');

for (const item of menu_items) {
  item.addEventListener('click', function() {
    item.classList.add('active__menu-link');
  })
}


for (const card of cards) {
  card.addEventListener("click", function() {
    const videoId = card.getAttribute("id");
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
  })
}

document.querySelector('.material-icons').addEventListener("click", function() {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = ""
})