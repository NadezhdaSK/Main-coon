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

    // slider

    class Slider {
        constructor (photoInner, photoWrapper, sliderContent, btnPrev, btnNext, activeClass) {
            this.photoInner = document.querySelector(photoInner);
            this.photoWrapper = document.querySelector(photoWrapper);
            this.sliderContent = document.querySelectorAll(sliderContent);
            this.sliderContentLength = this.sliderContent.length;
            this.btnPrev = document.querySelector(btnPrev);
            this.btnNext = document.querySelector(btnNext);
            this.activeClass = activeClass;
            this.offsetPhoto = 0;
            this.index = 0;
            this.photoWidth = window.getComputedStyle(this.photoWrapper).width;
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

    // slider team

    new Slider (
        '.team__photo-inner',
        '.team__photo-wrapper',
        '.team__block-content',
        '.team__button--left',
        '.team__button--right',
        'team__block-content--active')
    .slider();

    // slider recall

    new Slider (
        '.recall__photo-inner', 
        '.recall__photo-wrapper', 
        '.recall__block-content', 
        '.recall__button--left', 
        '.recall__button--right', 
        'recall__block-content--active')
    .slider();

    // slider pets

    const photoInnerPets = document.querySelector('.pets__photo--inner'),
        photoWrapperPets = document.querySelector('.pets__photo--wrapper'),
        photoPets = document.querySelectorAll('.pets__photo'),
        photoLengthPets = photoPets.length,
        btnPrevPets = document.querySelector('.pets__arrow--left'),
        btnNextPets = document.querySelector('.pets__arrow--right');

    if (window.matchMedia("(max-width: 767px)").matches) {

        let offsetPhoto = 0,
            photoWidth = window.getComputedStyle(photoWrapperPets).width;
            photoWidth = +photoWidth.slice(0, photoWidth.length - 2);

            photoPets.forEach(item => {
                item.style.width = `${photoWidth}px`;
            });

        photoInnerPets.style.width = 100 * photoLengthPets + '%';
        
        btnNextPets.addEventListener('click', () => {
    
            if (offsetPhoto == photoWidth * (photoLengthPets - 1)) {
                offsetPhoto = 0;
            } else {
                offsetPhoto += photoWidth;
            }
    
            photoInnerPets.style.transform = `translateX(-${offsetPhoto}px)`;
    
        });
    
        btnPrevPets.addEventListener('click', () => {
    
            if (offsetPhoto == 0) {
                offsetPhoto = photoWidth * (photoLengthPets - 1);
            } else {
                offsetPhoto -= photoWidth;
            }
    
            photoInnerPets.style.transform = `translateX(-${offsetPhoto}px)`;
    
        });
      } 

      if (window.matchMedia("(max-width: 1103px)").matches) {
        let index = 1;

        const catPrev = 'pets__photo--left',
              catCenter = 'pets__photo--center',
              catNext = 'pets__photo--right';

        photoPets[0].classList.add(catPrev);
        photoPets[1].classList.add(catCenter);
        photoPets[2].classList.add(catNext);

        btnNextPets.addEventListener('click', () => {

            index++;

            if ( index == 3 ) {
                index = 0;
            }

            if (index == 2) {
                photoPets[0].classList.remove(catPrev);
                photoPets[0].classList.add(catNext);

                photoPets[1].classList.remove(catCenter);
                photoPets[1].classList.add(catPrev);

                photoPets[2].classList.remove(catNext);
                photoPets[2].classList.add(catCenter);
            } else if (index == 0) {
                photoPets[1].classList.remove(catPrev);
                photoPets[1].classList.add(catNext);

                photoPets[2].classList.remove(catCenter);
                photoPets[2].classList.add(catPrev);

                photoPets[0].classList.remove(catNext);
                photoPets[0].classList.add(catCenter);
            } else if (index == 1) {
                photoPets[2].classList.remove(catPrev);
                photoPets[2].classList.add(catNext);

                photoPets[0].classList.remove(catCenter);
                photoPets[0].classList.add(catPrev);

                photoPets[1].classList.remove(catNext);
                photoPets[1].classList.add(catCenter);
            }
            
        });
    
        btnPrevPets.addEventListener('click', () => {
    
            index--;

            if ( index == -1 ) {
                index = 2;
            }

            if (index == 2) {
                photoPets[0].classList.remove(catCenter);
                photoPets[0].classList.add(catNext);

                photoPets[1].classList.remove(catNext);
                photoPets[1].classList.add(catPrev);

                photoPets[2].classList.remove(catPrev);
                photoPets[2].classList.add(catCenter);
            } else if (index == 0) {
                photoPets[1].classList.remove(catCenter);
                photoPets[1].classList.add(catNext);

                photoPets[2].classList.remove(catNext);
                photoPets[2].classList.add(catPrev);

                photoPets[0].classList.remove(catPrev);
                photoPets[0].classList.add(catCenter);
            } else if (index == 1) {
                photoPets[2].classList.remove(catCenter);
                photoPets[2].classList.add(catNext);

                photoPets[0].classList.remove(catNext);
                photoPets[0].classList.add(catPrev);

                photoPets[1].classList.remove(catPrev);
                photoPets[1].classList.add(catCenter);
            }
    
        });
      }
});
