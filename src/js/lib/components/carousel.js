import $ from '../core';

$.prototype.carousel = function(){
    for(let i = 0; i < this.length; i++){
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slidIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e)=>{
            e.preventDefault();
            if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))){
                offset = 0;
            }else{
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slidIndex == slides.length - 1){
                slidIndex = 0;
            }else{
                slidIndex++;
            }
            dots.forEach(dot=> dot.classList.remove('active'));
            dots[slidIndex].classList.add('active');
        })

        $(this[i].querySelector('[data-slide="prev"]')).click((e)=>{
            e.preventDefault();

            if(offset == 0){                
                offset = +width.replace(/\D/g, '') * (slides.length - 1)
            }else{
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slidIndex == 0){
                
                slidIndex = slides.length - 1;
            }else{
                slidIndex--;
            }
            dots.forEach(dot=> dot.classList.remove('active'));
            dots[slidIndex].classList.add('active');
        })

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click((e)=>{
            e.preventDefault();
            const slideTo = e.target.getAttribute('data-slide-to');

            slidIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot=> dot.classList.remove('active'));
            dots[slidIndex].classList.add('active');
        })
    }
}

$('.carousel').carousel();