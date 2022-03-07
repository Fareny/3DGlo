import { anim } from "./helpers";
const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popupContent = document.querySelector('.popup-content');
    const mainForm = popupContent.querySelector(".main-form");

    anim(modal, buttons, popupContent, mainForm);

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = `none`;
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        });
    });
};

export default modal;