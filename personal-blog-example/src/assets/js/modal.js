const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.querySelector('body');
const modalClose = document.querySelectorAll('.modal__close');
const modals = document.querySelectorAll('.modal');
// modal windows
let modalContent = [
  document.querySelectorAll('.modal__content'),
  document.querySelector('.modal__video'),
];

// when clicked on button\link = open modals
modalBtn.forEach(item => {
  item.addEventListener('click', e => {
    let modalData = e.currentTarget.getAttribute('data-modal');
    let modalId = document.querySelector(`#${modalData}`);

    modalContent[0].forEach(modalItem => {
      modalItem.addEventListener('click', e => {
        e.stopPropagation();
      });
    });
    modalContent[1].addEventListener('click', e => {
      e.stopPropagation();
    });

    modalId.classList.add('show');
    body.classList.add('no-scroll');

    // anim
    modalContent[0].forEach(item => {
      setTimeout(function () {
        item.style.transform = 'none';
      }, 350);
    });
  });
});

// when clicked on close button = close modals
modalClose.forEach(closeBtn => {
  closeBtn.addEventListener('click', e => {
    let that = e.currentTarget;
    modalContent[0].forEach(item => {
      item.removeAttribute('style');
    });
    setTimeout(() => {
      that.closest('.modal').classList.remove('show');
      body.classList.remove('no-scroll');
    }, 350);
  });
});

// when clicked on body(not close button) = close modals
modals.forEach(modal => {
  modal.addEventListener('click', e => {
    let that = e.currentTarget;
    modalContent[0].forEach(item => {
      item.removeAttribute('style');
    });
    setTimeout(() => {
      that.classList.remove('show');
      body.classList.remove('no-scroll');
    }, 350);
  });
});
