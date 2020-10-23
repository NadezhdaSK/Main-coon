'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // accordion

    const question = document.querySelectorAll('.answers__question'),
    answer = document.querySelectorAll('.answers__answer'),
    blocks = document.querySelectorAll('.answers__item');

    question.forEach((item, i) => {
        item.addEventListener('click', () => {
            blocks.forEach(block => {
                block.classList.remove('active');
            });
            blocks[i].classList.add('active');
        });
    });

    // slider team

    const photoInner = document.querySelector('.team__photo-inner'),
          photoSlider = document.querySelector('.team__photo-wrapper'),
          sliderContent = document.querySelectorAll('.team__block-content'),
          btnPrev = document.querySelector('.team__button--left'),
          btnNext = document.querySelector('.team__button--right');

    let offsetPhoto = 0;
    let index = 0;

    let photoWidth = window.getComputedStyle(photoSlider).width;
    photoWidth = +photoWidth.slice(0, photoWidth.length - 2);

    photoInner.style.width = 100 * sliderContent.length + '%';
    sliderContent[index].classList.add('team__block-content--active');

    btnNext.addEventListener('click', () => {

        if (index == sliderContent.length - 1) {
            index = 0;
            offsetPhoto = 0;
            console.log('hi');
        } else {
            index++;
            offsetPhoto += photoWidth;
        }

        photoInner.style.transform = `translateX(-${offsetPhoto}px)`;

        sliderContent.forEach(item => {
            item.classList.remove('team__block-content--active');
        });

        sliderContent[index].classList.add('team__block-content--active');

    });

    btnPrev.addEventListener('click', () => {

        if (index == 0) {
            index = sliderContent.length - 1;
            offsetPhoto = photoWidth * (sliderContent.length - 1);
        } else {
            index--;
            offsetPhoto -= photoWidth;
        }

        photoInner.style.transform = `translateX(-${offsetPhoto}px)`;

        sliderContent.forEach(item => {
            item.classList.remove('team__block-content--active');
        });

        sliderContent[index].classList.add('team__block-content--active');

    });

});
