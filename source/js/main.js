'use strict';

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
