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

    const photoInnerTeam = document.querySelector('.team__photo-inner'),
          photoWrapperTeam = document.querySelector('.team__photo-wrapper'),
          sliderContentTeam = document.querySelectorAll('.team__block-content'),
          btnPrevTeam = document.querySelector('.team__button--left'),
          btnNextTeam = document.querySelector('.team__button--right');


    class Slider {
        constructor (photoInner, photoWrapper, sliderContent, btnPrev, btnNext, activeClass) {
            this.photoInner = photoInner;
            this.photoWrapper = photoWrapper;
            this.sliderContent = sliderContent;
            this.sliderContentLength = sliderContent.length;
            this.btnPrev = btnPrev;
            this.btnNext = btnNext;
            this.activeClass = activeClass;
            this.offsetPhoto = 0;
            this.index = 0;
            this.photoWidth = window.getComputedStyle(photoWrapper).width;
            this.photoWidth = +this.photoWidth.slice(0, this.photoWidth.length - 2);
        }

        slider() {
            this.photoInner.style.width = 100 * this.sliderContentLength + '%';
            this.sliderContent[this.index].classList.add(this.activeClass);
        
            this.btnNext.addEventListener('click', () => {
        
                if (this.index == this.sliderContentLength - 1) {
                    this.index = 0;
                    this.offsetPhoto = 0;
                } else {
                    this.index++;
                    this.offsetPhoto += this.photoWidth;
                }
        
                this.photoInner.style.transform = `translateX(-${this.offsetPhoto}px)`;
        
                this.sliderContent.forEach(item => {
                    item.classList.remove(this.activeClass);
                });
        
                this.sliderContent[this.index].classList.add(this.activeClass);
        
            });
        
            this.btnPrev.addEventListener('click', () => {
        
                if (this.index == 0) {
                    this.index = this.sliderContentLength - 1;
                    this.offsetPhoto = this.photoWidth * (this.sliderContentLength - 1);
                } else {
                    this.index--;
                    this.offsetPhoto -= this.photoWidth;
                }
        
                this.photoInner.style.transform = `translateX(-${this.offsetPhoto}px)`;
        
                this.sliderContent.forEach(item => {
                    item.classList.remove(this.activeClass);
                });
        
                this.sliderContent[this.index].classList.add(this.activeClass);
        
            });
        }
    }

    new Slider (photoInnerTeam, photoWrapperTeam, sliderContentTeam, btnPrevTeam, btnNextTeam, 'team__block-content--active').slider();

    // slider recall

    const photoInnerRecall = document.querySelector('.recall__photo-inner'),
          photoWrapperRecall = document.querySelector('.recall__photo-wrapper'),
          sliderContentRecall = document.querySelectorAll('.recall__block-content'),
          btnPrevRecall = document.querySelector('.recall__button--left'),
          btnNextRecall = document.querySelector('.recall__button--right');

    new Slider (photoInnerRecall, photoWrapperRecall, sliderContentRecall, btnPrevRecall, btnNextRecall, 'recall__block-content--active').slider();

    // new 

    // let offsetPhoto = 0;
    // let index = 0;

    // let photoWidth = window.getComputedStyle(photoWrapper).width;
    // photoWidth = +photoWidth.slice(0, photoWidth.length - 2);

    // photoInner.style.width = 100 * sliderContent.length + '%';
    // sliderContent[index].classList.add('team__block-content--active');

    // btnNext.addEventListener('click', () => {

    //     if (index == sliderContent.length - 1) {
    //         index = 0;
    //         offsetPhoto = 0;
    //         console.log('hi');
    //     } else {
    //         index++;
    //         offsetPhoto += photoWidth;
    //     }

    //     photoInner.style.transform = `translateX(-${offsetPhoto}px)`;

    //     sliderContent.forEach(item => {
    //         item.classList.remove('team__block-content--active');
    //     });

    //     sliderContent[index].classList.add('team__block-content--active');

    // });

    // btnPrev.addEventListener('click', () => {

    //     if (index == 0) {
    //         index = sliderContent.length - 1;
    //         offsetPhoto = photoWidth * (sliderContent.length - 1);
    //     } else {
    //         index--;
    //         offsetPhoto -= photoWidth;
    //     }

    //     photoInner.style.transform = `translateX(-${offsetPhoto}px)`;

    //     sliderContent.forEach(item => {
    //         item.classList.remove('team__block-content--active');
    //     });

    //     sliderContent[index].classList.add('team__block-content--active');

    // });

});
