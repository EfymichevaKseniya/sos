    
function langMenu() {
    const select = document.querySelector('.select__box'),
        selectValue = document.querySelector('.select__value'),
        selectDropdown = document.querySelector('.select__dropdown');
    

        select.addEventListener('click', () => {
        selectDropdown.classList.toggle('show');

                
        selectDropdown.addEventListener('click', e => {
            const option = e.target.closest('.select__option');
            let temp = "";

            if (option) {
                temp = selectValue.textContent;
                selectValue.textContent = option.textContent;
                option.textContent = temp;
                e.target.closest('.select__box').blur();
            }
            
        });
    });
}

langMenu();




function slider() {
    const   card = document.querySelectorAll('.slider__item'),
            arrowNext = document.querySelector('.arrow-next'),
            cardWrapper = document.querySelector('.slider__wrapper'),
            width = window.getComputedStyle(cardWrapper).width,
            slider = document.querySelector('.slider');
            
            let arr = [];
            let currentSlide = 0;
            let slideIndex = 1;
        
            function slides() {
                
            }

            cardWrapper.style.transition = '0.5s all';

            slider.style.position = 'relative';

            const indicators = document.createElement('ol'),
                dots = [];
            indicators.classList.add('carousel-indicators');

            slider.append(indicators);

            for (let i = 0; i < card.length; i++) {
                const dot = document.createElement('li');
                dot.classList.add('dot');
                dot.setAttribute('data-slide-to', i + 1);


                if ( i == 0) {
                    dot.style.backgroundColor = '#fff';
                }
                indicators.append(dot);
                dots.push(dot);
            }

            
            function showSlides() {
                dots.forEach(dot => dot.style.backgroundColor = 'transparent');
                dots[slideIndex-1].style.backgroundColor = '#fff';
            }

            function nextSlide() {
                if (currentSlide < card.length) {
                    card[currentSlide].classList.toggle('top');
                    currentSlide = (currentSlide+1) % card.length;
                    card[currentSlide].classList.add('top');
                } 
                
            }
            

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideTo = e.target.getAttribute('data-slide-to');
    
                    slideIndex = slideTo;
                    showSlides();
                });
            });

            arrowNext.addEventListener('click', () => {
                slides();
                nextSlide();

                if (slideIndex == card.length) {
                    slideIndex = 1;
                } else {
                    slideIndex++;
                }
    
                showSlides();
                
            });

            
            
}

slider();

function accordion() {

    const  items = document.querySelectorAll('.accordion__item');
            
            items.forEach(item => {
                item.addEventListener('click', () => {
    
                    item.classList.toggle('active'); 

                });
            });   
            
}

accordion();