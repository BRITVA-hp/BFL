document.addEventListener('DOMContentLoaded', () => {

    // закрытие модалки

    function modalClose(modal, modalClose, modalActiveClass) {
        const modal_ = document.querySelector(modal),
              modalClose_ = document.querySelector(modalClose);

        modalClose_.addEventListener('click', () => {
            modal_.classList.remove(modalActiveClass);
        });

        modal_.addEventListener('click', (e) => {
            if (e.target.classList.contains(modalActiveClass)) {
                modal_.classList.remove(modalActiveClass);
            }
        });
    }

    modalClose('.modal-end', '.modal-end__close', 'modal--visible');
    modalClose('.modal-success', '.modal-success__close', 'modal--visible');
    modalClose('.modal-call', '.modal-call__close', 'modal--visible');

    // функция для модалки

    function calcScroll() {
        let div = document.createElement('div');
      
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
      
        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
      
        return scarollWidth;
    }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
              modal_ = document.querySelector(modal),
              modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });
    
            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains(modal.replace(/\./, ''))) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal-call', 'modal--visible', '[data-modal]', '.modal-call__close');


});