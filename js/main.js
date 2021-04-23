    
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
    const   slides = document.querySelectorAll('.slider__item'),
            arrowNext = document.querySelector('.arrow-next'),
            sliderWrapper = document.querySelector('.slider__wrapper'),
            width = window.getComputedStyle(sliderWrapper).width,
            slider = document.querySelector('.slider');

            

            let currentSlide = 0;
            let slideIndex = 1;
        
            sliderWrapper.style.transition = '0.5s all';

            slider.style.position = 'relative';

            const indicators = document.createElement('ol'),
                    dots = [];
            indicators.classList.add('carousel-indicators');

            slider.append(indicators);

            for (let i = 0; i < slides.length; i++) {
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

            
            

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideTo = e.target.getAttribute('data-slide-to');
    
                    slideIndex = slideTo;
                    showSlides();
                });
            });

            function slidesOrder() {
                if (currentSlide === 0) {
                    slides[currentSlide].classList.toggle('one');
                }
                if (currentSlide === 1) {
                    slides[currentSlide].classList.toggle('two');
                }
                if (currentSlide === 2) {
                    slides[currentSlide].classList.toggle('three');
                }
                if (currentSlide === 3) {
                    slides[currentSlide].classList.toggle('four');
                }
            }

            

            function nextSlide() {
                
                slides.forEach(card => card.classList.remove('top'));
                if (currentSlide < slides.length) {
                    slides[currentSlide].classList.toggle('top');
                    
                    currentSlide = (currentSlide+1) % slides.length;
                    slidesOrder();
                } 
                
            }
                

            arrowNext.addEventListener('click', () => {
                nextSlide();

                if (slideIndex == slides.length) {
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