const burger = document.querySelector('#burger');
const sidebar = document.querySelector('#sidebar');
const page = document.querySelector('#page');

function showSidebar() {
  let mask = document.createElement('div');
  mask.classList.add('page__mask');
  mask.addEventListener('click', closeSidebar);
  page.appendChild(mask);
  document.body.classList.add('show-sidebar');
}

function closeSidebar() {
  console.log('close');
  document.body.classList.remove('show-sidebar');
  document.querySelector('.page__mask').remove();
}

// when clicked on burger button = open\close menu
burger.addEventListener('click', () => {
  if (document.body.classList.contains('show-sidebar')) {
    closeSidebar();
  } else {
    showSidebar();
  }
});
