const tabItem = document.querySelectorAll('.tabs-btn__item');
const tabContent = document.querySelectorAll('.tabs-content__item');

tabItem.forEach(function (element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tabs-btn__item--active');
    });

    tabTarget.classList.add('tabs-btn__item--active');

    tabContent.forEach(function (item) {
        item.classList.remove('tabs-content__item--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs-content__item--active');
};

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
});

const swiper = new Swiper('.swiper', {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

const { event } = require("jquery");
