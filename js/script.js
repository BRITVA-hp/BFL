document.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal__close');

    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal--visible');
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal--visible')) {
            modal.classList.remove('modal--visible');
        }
    });

});