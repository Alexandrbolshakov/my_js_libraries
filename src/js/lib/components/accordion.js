import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head--active'
    , contentActive = 'accordion-content--active'
    , paddings = 40){
    for(let i = 0; i< this.length; i++){
        $(this[i]).click(()=>{
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);
            if(this[i].classList.contains(headActive)){
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + padding + 'px';
            }else{
                this.nextElementSibling.style.maxHeight = '0px';
            }

        })
    }
}

$('.accordion-head').accordion();